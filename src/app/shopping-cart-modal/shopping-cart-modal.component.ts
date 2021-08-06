import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-cart-modal',
  templateUrl: './shopping-cart-modal.component.html',
  styleUrls: ['./shopping-cart-modal.component.scss'],
})
export class ShoppingCartModalComponent{

  constructor(private modalController: ModalController) { }

  removeAmount: any

  @Input() shoppingCart: any

  ngOnInit(){
    console.log(this.shoppingCart)

    this.detectDeviceScreenSize()
  }

  detectDeviceScreenSize(){
    let cartWindow = <HTMLElement>document.querySelector('.temp-cart-modal')
    let Wheight = window.screen.height

    cartWindow.style['height'] = (Wheight - 32) + 'px'
  }

  removeProductRow(product){
    for(let i=0; i < this.shoppingCart.length; i++){
      if(product.ID === this.shoppingCart[i].ID){
        this.removeAmount = this.shoppingCart[i].amount
        this.shoppingCart.splice(i, 1)
        console.log(this.shoppingCart)
        return
      }
    }
  }

  async closeShoppingCart(){
    const returnCart: any = this.shoppingCart
    const callUpdate: any = this.removeAmount
    await this.modalController.dismiss(returnCart, callUpdate)
  }

}
