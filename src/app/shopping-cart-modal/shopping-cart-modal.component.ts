import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss'],
})
export class ShoppingCartModalComponent{

  constructor(private modalController: ModalController, public navController: NavController, public router: Router) { }

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
    this.closeShoppingCart()
    this.router.navigate(['/player-tabs/payment'], {state: cartData})
  }

  detectDeviceScreenSize(){
    let cartWindow = <HTMLElement>document.querySelector('.temp-cart-modal')
    let Wheight = window.screen.height

    cartWindow.style['height'] = (Wheight - 32) + 'px'
  }

  minus(productIndex){
    this.shoppingCart[productIndex].price = Number(this.shoppingCart[productIndex].price) - this.unitPrice[productIndex]
    this.shoppingCart[productIndex].amount--
    this.recalAmount--
    this.totalPrice = this.totalPrice - this.unitPrice[productIndex]
    console.log(this.recalAmount)
  }

  reCalculate(productIndex, $event){
    let ionInput = document.querySelector('ion-input');
    let newAmount 
    newAmount = ionInput.value

    if(newAmount <= 1){
      this.shoppingCart[productIndex].price = this.unitPrice[productIndex]
      this.totalPrice = this.totalPrice - (this.unitPrice[productIndex] * newAmount)
      this.shoppingCart[productIndex].amount = 1
      $event.stopPropagation()
    }
    this.shoppingCart[productIndex].price = this.unitPrice[productIndex] * newAmount
    this.shoppingCart[productIndex].amount = newAmount
    if(newAmount > this.unitAmount[productIndex]){
      this.recalAmount = this.recalAmount + (newAmount - this.unitAmount[productIndex])
      this.totalPrice = this.totalPrice + (this.unitPrice[productIndex] * newAmount)
      console.log(this.recalAmount)
    }else{
      this.recalAmount = this.recalAmount - (this.unitAmount[productIndex] - newAmount)
      this.totalPrice = this.totalPrice - (this.unitPrice[productIndex] * newAmount)
      console.log(this.recalAmount)
    }
  }

  plus(productIndex){
    this.shoppingCart[productIndex].price = Number(this.shoppingCart[productIndex].price) + this.unitPrice[productIndex]
    this.shoppingCart[productIndex].amount++
    this.recalAmount++
    this.totalPrice = this.totalPrice + this.unitPrice[productIndex]
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
