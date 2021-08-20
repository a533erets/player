import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
import { ModalController } from '@ionic/angular';
import { ShoppingCartModalComponent } from '../shopping-cart-modal/shopping-cart-modal.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor(public http: HttpService ,private modalController: ModalController, public router: Router ) { }

  closeCall: boolean = false
  search: string

  ngOnInit() {
    this.getProducts()

    let contentWindow = document.querySelector('.productList')
    let btn = <HTMLElement>document.querySelector('.float')

    contentWindow.addEventListener('scroll', ()=>{
      let contentTop = contentWindow.scrollTop
      let contentHeight = contentWindow.clientHeight
      // console.log(contentTop)
      let btnHeight = btn.offsetHeight
      let bottomCap = 20
      let finalTop = contentTop + (contentHeight - btnHeight) - bottomCap
      btn.style['top'] = finalTop + 'px'
    })
  }

  getProducts(){
    let Url = 'http://localhost/foodPlayer/src/app/php/getProducts.php'
    let target = 'product'
    this.http.getData(Url, target)
  }

  close(){
    let content = <HTMLElement>document.querySelector('.productList')
    this.closeCall = true
    content.classList.add('modalClose')
  }

  addToCart(product){
    this.http.addShoppingCart(product)
  }

  async openCartModal(){
      const modal = await this.modalController.create({
        component: ShoppingCartModalComponent,
        componentProps: {
          'shoppingCart': this.http.shoppingCart
        },
        // cssClass: 'custom-modal-class'
      })

      modal.onDidDismiss().then((response: any) => {
        console.log(response)
        if(response.data !== undefined){
         this.http.upDateCart(response.data.returnCart, response.data.callUpdate)
        }
      })

      await modal.present()
    }

  sortProducts(){
    let products 
    products = document.querySelectorAll('li')
    for(let i=0; i < this.http.products.length; i++){
      if(!this.http.products[i].name.includes(this.search)){
        products[i].style['display'] = 'none'
      }else{
        products[i].style['display'] = 'block'
      }
    }
  }

  toLogin(){
    if(this.http.checkLogIn() === true){
      this.router.navigate(['player-tabs/member'])
    }else{
      this.router.navigate(['player-tabs/login'])
    }
  }
}
