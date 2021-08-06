import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  constructor( private http: HttpClient ) { }

  shoppingCart_modal: {open: boolean} = {open: false}

  products: object[] = []
  curries: object[] = []
  dons: object[] = []
  frieds: object[] = []
  sweets: object[] = []

  shoppingCart: any[] = []
  tempCart: any[] = []

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
    this.http.get('http://localhost/foodPlayer/src/app/php/getProducts.php')
    .subscribe(data => {
      console.log(data)

      for(let i=0; i < Object.keys(data).length; i++){
        this.products.push(data[i])
        // this.SortProducts(data[i])
      }
    })
  }

  pushTempCart(product){
    this.shoppingCart_modal.open = true
    this.fixParentPosition()
    this.openTempCart(product).then((resolve: any) => {
      console.log(resolve)
    }).then(()=>{
      if(this.tempCart.length > 0){
        console.log(this.tempCart.length)
        let cart = <HTMLElement>document.querySelector('.temp-cart-modal')
        cart.style['display'] = 'block'
      }
    }).catch((reject)=>{
      console.log(reject)
    })

  }

  openTempCart(product){
    return new Promise((resolve, reject) => {
      if(this.shoppingCart_modal.open === false){
        reject('error')
      }else{
        resolve('proceed')
        if(this.tempCart.length > 0){
          this.checkTempCart(product)
        }else{
          product = {ID: product.ID, image: product.image, name: product.name, price: product.price, amount: 1}
          this.tempCart.push(product)
          console.log(this.tempCart)
        }
      }
    })
  }

  closeTempCart(){
    this.shoppingCart_modal.open = false
    let cart = <HTMLElement>document.querySelector('.temp-cart-modal')
    cart.style['display'] = 'none'
  }

  fixParentPosition(){
    let contentWindow = <HTMLElement>document.querySelector('.productList')
    contentWindow.style['overflow'] = 'hidden'
  }

  addToCart(prodocut){
    this.shoppingCart.push(prodocut)
    console.log(this.shoppingCart)
  }

  checkTempCart(product){
    for(let i=0; i < this.tempCart.length; i++){
      if(product.name === this.tempCart[i].name){
        this.tempCart[i].amount++
      }
    }
  }

  updateCart(){
    let amount
    amount = document.querySelector('.amount')
    if(this.tempCart.length > 0){
      let newAmount = this.tempCart.length
      amount.innerHTML = newAmount
    }
  }

  // openCartModal(){
  //   if(this.shoppingCart_modal.open === false){
  //     let cart = <HTMLElement>document.querySelector('.shopping-cart-modal')
  //     cart.style['display'] = 'block'
  //   }
  // }

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
