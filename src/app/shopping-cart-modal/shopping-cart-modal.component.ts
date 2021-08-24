import { Component, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss'],
})
export class ShoppingCartModalComponent{

  constructor(private modalController: ModalController, public router: Router, public http: HttpService) { }

  unitPrice: number[] = []
  unitAmount: number[] = []
  totalPrice: number = 0
  recalAmount: any = 0
  removeAsked: boolean = false
  deleteProduct: any

  @Input() shoppingCart: any

  ngOnInit(){
    console.log(this.shoppingCart)

    this.detectDeviceScreenSize()

    for(let i=0; i < this.shoppingCart.length; i++){
      this.unitPrice.push(Number(this.shoppingCart[i].price) / Number(this.shoppingCart[i].amount))
      this.unitAmount.push(Number(this.shoppingCart[i].amount))
      this.totalPrice = this.totalPrice + Number(this.shoppingCart[i].price)
      this.recalAmount = this.recalAmount + Number(this.shoppingCart[i].amount)
    }
    console.log(this.recalAmount)
  }

  toPayment(){
    let cartData = {theCart: this.shoppingCart, total: this.totalPrice}
    this.http.cartData = cartData
    this.closeShoppingCart()
    this.router.navigate(['/player-tabs/payment'])
  }

  detectDeviceScreenSize(){
    let cartWindow = <HTMLElement>document.querySelector('.temp-cart-modal')
    let Wheight = window.screen.height

    cartWindow.style['height'] = (Wheight - 32) + 'px'
  }

  reCalculate(index, newAmount){
    let increase = newAmount - this.unitAmount[index]
    let decrease = this.unitAmount[index] - newAmount
    let add_price = this.unitPrice[index] * increase
    let de_price = this.unitPrice[index] * decrease

    if(newAmount <= 0){
      newAmount = 1
      this.shoppingCart[index].amount = 1
      this.totalPrice = this.totalPrice - de_price
      return this.recalAmount = this.recalAmount - decrease
    }

    if(newAmount < this.unitAmount[index]){
      this.totalPrice = this.totalPrice - de_price
      this.recalAmount = this.recalAmount - decrease
    }

    if(newAmount > this.unitAmount[index]){
      this.totalPrice = this.totalPrice + add_price
      this.recalAmount = this.recalAmount + increase
    }
    this.shoppingCart[index].price = newAmount * this.unitPrice[index]
    this.unitAmount[index] = newAmount
    this.shoppingCart[index].amount = newAmount
    console.log(this.recalAmount)
  }

  openAskModal(product){
    let askModal = <HTMLElement>document.querySelector('#beforeRemove')
    let ask = <HTMLElement>document.querySelector('.ask')
    ask.innerHTML = `${product.name}`
    this.deleteProduct = product
    askModal.style['display'] = 'block'
  }

  closeAskModal(){
    let askModal = <HTMLElement>document.querySelector('#beforeRemove')
    askModal.style['display'] = 'none'
  }

  askRemove(){
    if(this.removeAsked === false){
      this.removeAsked = true
      this.removeProductRow(this.deleteProduct)
      this.closeAskModal()
    }else{
      console.log('error')
    }
  }

  removeProductRow(product){
    for(let i=0; i < this.shoppingCart.length; i++){
      if(product.ID === this.shoppingCart[i].ID){
        this.recalAmount = this.recalAmount - this.shoppingCart[i].amount
        this.totalPrice = this.totalPrice - this.shoppingCart[i].price
        this.shoppingCart.splice(i, 1)
        console.log(this.shoppingCart)
        this.removeAsked = false
        return
      }
    }
  }

  async closeShoppingCart(){
    const returnCart: any = this.shoppingCart
    const callUpdate: any = this.recalAmount
    const data: any = {returnCart, callUpdate}
    await this.modalController.dismiss(data)
  }

}
