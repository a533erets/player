import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { ShoppingCartModalComponent } from '../shopping-cart-modal/shopping-cart-modal.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor( private http: HttpClient, private modalController: ModalController ) { }

  currentAmount: any = 0

  products: object[] = []
  curries: object[] = []
  dons: object[] = []
  frieds: object[] = []
  sweets: object[] = []

  shoppingCart: any[] = []

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
    this.http.get('http://localhost/foodplayer/src/app/php/getProducts.php')
    .subscribe(data => {
      console.log(data)

      for(let i=0; i < Object.keys(data).length; i++){
        this.products.push(data[i])
        // this.SortProducts(data[i])
      }
    })
  }

  addToCart(product){
    if(this.shoppingCart.length > 0){
     this.addOnTop(product)
    }else{
      this.addNewOne(product) 
    }
  }

  addNewOne(product){
    this.shoppingCart.push({ID: product.ID, name: product.name, image: product.image, price: product.price, amount: 1})
    this.currentAmount++
    this.updateCart()
  }

  addOnTop(product){
    for(let i=0; i < this.shoppingCart.length; i++){
      if(product.ID === this.shoppingCart[i].ID){
        this.shoppingCart[i].amount++
        this.shoppingCart[i].price = this.shoppingCart[i].price * this.shoppingCart[i].amount 
        this.currentAmount++
        this.updateCart()
        return
      }
    }
    this.addNewOne(product)
  }

  updateCart(){
    let amount
    amount = document.querySelector('.amount')
    amount.innerHTML = this.currentAmount
  }

  async openCartModal(){
      const modal = await this.modalController.create({
        component: ShoppingCartModalComponent,
        componentProps: {
          'shoppingCart': this.shoppingCart
        },
        // cssClass: 'custom-modal-class'
      })

      modal.onDidDismiss().then((response: any) => {
        console.log(response)
        if(response.data !== undefined){
          this.shoppingCart = response.data.returnCart
          if(response.data.callUpdate === 0){
            this.currentAmount = 0
            this.updateCart()  
          }else{
            this.currentAmount = response.data.callUpdate
            this.updateCart()
          }
          
        }
      })

      await modal.present()
    }

  // SortProducts(product){
  //   let types = ['咖哩', '丼飯', '炸物', '甜品']

  //   if(product.type === types[0]){
  //     this.curries.push(product)
  //   }

  //   if(product.type === types[1]){
  //     this.dons.push(product)
  //   }

  //   if(product.type === types[2]){
  //     this.frieds.push(product)
  //   }

  //   if(product.type === types[4]){
  //     this.sweets.push(product)
  //   }
  // }

}
