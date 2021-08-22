import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpService } from '../../service/http.service'

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  CartData: any = []
  cartPushed: boolean = false

  constructor(public http: HttpService, public router: Router, public navContoller: NavController){}

  ngOnInit() {}

  ionViewWillEnter(){
    if(this.http.cartData){
      const theCart = this.http.cartData
      console.log(theCart)
      this.CartData = theCart
    }
  }

  prepareCart(formData, payment){
    return new Promise((resolve, reject)=>{
      if(formData && this.http.logInState.logIn === true){
        resolve('newCart')
        formData.append('userID', this.http.logInState.ID)
        formData.append('userName', this.http.logInState.name)
        formData.append('theCart', JSON.stringify(this.CartData.theCart))
        formData.append('total', this.CartData.total)
        formData.append('payment', payment)
      }else{
        return reject('error')
      }      
    })
  }

  backToOrder(){
    this.navContoller.back()
  }

  pushCart(payment){
    let formData = new FormData()
    if(this.CartData.theCart.length > 0){
      console.log(payment)

      this.prepareCart(formData, payment).then((resolve) => {
        console.log(resolve)
      }).then(()=>{
        formData.forEach((value,key)=>{
          console.log(key+""+value)
        })
      }).then(()=>{
        let Url = 'http://localhost/foodPlayer/src/app/php/toCart.php'
        this.http.pushData(Url, 'shoppingCart', formData)
        this.cartPushed = true
        this.http.payLoad.pushed = true
        this.http.payLoad.start = new Date().getTime();
        this.http.clearCart()
      }).catch((reject)=>{
        console.log(reject)
      })

    }
  }

  toTracking(){
    this.router.navigate(['/player-tabs/delivery-tracking'])
    this.cartPushed = false
  }

  toLogin(){
    if(this.http.checkLogIn() === true){
      this.router.navigate(['player-tabs/member'])
    }else{
      this.router.navigate(['player-tabs/login'])
    }
}

}
