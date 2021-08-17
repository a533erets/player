import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.page.html',
  styleUrls: ['./bonus.page.scss'],
})
export class BonusPage implements OnInit {

  constructor(private router:Router ,private navController:NavController ,private http: HttpClient) { }
  members:object[]=[]
  ngOnInit() {
    this.getMembers()
  }
  getMembers(){
    this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')

  

.subscribe(data=>{
  console.log(data)
  for (let i=0; i<Object.keys(data).length ;i++){
    this.members.push( data[i])
  }
})
  }
  bonus(){
    this.router.navigate(['player-tabs/bonus']);
  }

}



// @Component({
//   selector: 'app-order',
//   templateUrl: './order.page.html',
//   styleUrls: ['./order.page.scss'],
// })
// export class OrderPage implements OnInit {

//   constructor(public httpService: HttpService ,private modalController: ModalController ) { }

//   ngOnInit() {
//     this.getProducts()

//     let contentWindow = document.querySelector('.productList')
//     let btn = <HTMLElement>document.querySelector('.float')

//     contentWindow.addEventListener('scroll', ()=>{
//       let contentTop = contentWindow.scrollTop
//       let contentHeight = contentWindow.clientHeight
//       // console.log(contentTop)
//       let btnHeight = btn.offsetHeight
//       let bottomCap = 20
//       let finalTop = contentTop + (contentHeight - btnHeight) - bottomCap
//       btn.style['top'] = finalTop + 'px'
//     })
//   }

//   getProducts(){
//     let Url = 'http://localhost/foodplayer/src/app/php/getProducts.php'
//     this.httpService.getData(Url)
//     console.log(this.httpService.products)
//   }

//   addToCart(product){
//     this.httpService.addShoppingCart(product)
//   }

//   async openCartModal(){
//       const modal = await this.modalController.create({
//         component: ShoppingCartModalComponent,
//         componentProps: {
//           'shoppingCart': this.httpService.shoppingCart
//         },
//         // cssClass: 'custom-modal-class'
//       })

//       modal.onDidDismiss().then((response: any) => {
//         console.log(response)
//         if(response.data !== undefined){
//          this.httpService.upDateCart(response.data.returnCart, response.data.callUpdate)
//         }
//       })

//       await modal.present()
//     }

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

