import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor(public router: Router, public navContoller: NavController){
    if(router.getCurrentNavigation().extras.state){
      const theCart = this.router.getCurrentNavigation().extras.state
      console.log(theCart)
    }
  }
  ngOnInit() {
  }

  backToOrder(){
    this.navContoller.back()
  }

}
