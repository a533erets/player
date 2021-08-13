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

  constructor(public http: HttpService, public router: Router, public navContoller: NavController){
    if(router.getCurrentNavigation().extras.state){
      const theCart = router.getCurrentNavigation().extras.state
      console.log(theCart)
      this.CartData = theCart
    }
  }
  ngOnInit() {
  }

  prepareCart(formData, payment){
    let userName = 'deomo'
    let userID = 'demo'
    return new Promise((resolve, reject)=>{
      if(formData){
        resolve('update')
        formData.append('userName', userName)
        formData.append('userID', userID)
        formData.append('theCart', JSON.stringify(this.CartData.theCart))
        formData.append('total', this.CartData.total)
        formData.append('payment', payment)
      }else{
        reject('error')
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
        this.http.pushData(Url, formData)
        this.cartPushed = true
        this.http.clearCart()
      }).catch((reject)=>{
        console.log(reject)
      })

    }
  }

  toTracking(){
    let pushstate: any = this.cartPushed
    let start = new Date().getTime()
    const payload = {pushstate, start}
    this.router.navigate(['/player-tabs/delivery-tracking'], {state: payload})
    this.cartPushed = false
  }

}
