import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInformationPageModule } from './personal-information.module';
import { NavController } from '@ionic/angular';
import { HttpService } from '../../service/http.service'
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  constructor(private router:Router ,private PersonalInformationPageModule : PersonalInformationPageModule,private navController:NavController ,public http : HttpService) { }

  name: String
  phone: Number
  email: String
  address: String
  ngOnInit() {
    document.getElementById("dialog").style.display = 'none'
  }
  
  edit(){
    this.router.navigate(['player-tabs/edit']);
  }
  backToMemberInformation(){
    this.navController.back()
  }
  success(){
    document.getElementById("dialog").style.display = 'block';
    setTimeout(() => {
      document.getElementById("dialog").style.display = 'none';
    }, 2500);
    setTimeout(() => {
      this.router.navigate(['player-tabs/home']);
    }, 2500);

  }
  editMember(formData){
    // let userName = 'deomo'
    // let userID = 'demo'
    return new Promise((resolve, reject)=>{
      if(formData){
        resolve('update')
        formData.append('member_name', this.name)
        formData.append('phone', this.phone)
        formData.append('email', this.email)
        formData.append('address', this.address)
        // formData.append('theCart', JSON.stringify(this.CartData.theCart))
        // formData.append('total', this.CartData.total)
        
      }else{
        reject('error')
      }
      
    })
  }
  pushCart(){
    let formData = new FormData()
    // if(this.editMember.theCart.length > 0){
    //   console.log(payment)

      this.editMember(formData).then((resolve) => {
        console.log(resolve)
      }).then(()=>{
        formData.forEach((value,key)=>{
          console.log(key+""+value)
        })
      }).then(()=>{
        let Url = 'http://localhost/foodPlayer/src/app/php/memberEdit.php'
        this.http.pushData(Url, formData)
        // this.cartPushed = true
        // this.http.clearCart()
      }).catch((reject)=>{
        console.log(reject)
      })

    }
  }

