import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  CartData: any = []
  cartPushed: boolean = false

  constructor(public http: HttpClient, public router: Router, public navContoller: NavController){
    if(router.getCurrentNavigation().extras.state){
      const theCart = this.router.getCurrentNavigation().extras.state
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
        this.http.post('http://localhost/foodPlayer/src/app/php/toCart.php', formData).subscribe(response => {
          console.log(response)
        },error => {
          console.log(error)
        })
      }).then(()=>{
        let pay = <HTMLElement>document.querySelector('.pay')
        let result = <HTMLElement>document.querySelector('.result')
        pay.style['display'] = 'none'
        result.style['display'] = 'block'
        this.cartPushed = true
      }).catch((reject)=>{
        console.log(reject)
      })

    }
  }

  toTracking(){
    let pushstate: any = this.cartPushed
    this.router.navigate(['/player-tabs/delivery-tracking'], {state: pushstate})
  }

}
