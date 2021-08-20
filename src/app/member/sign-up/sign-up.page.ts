import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpPageModule } from './sign-up.module';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  password: string;
  reconfirmPwd: string;
  member_name: String
  phone: Number
  email: String
  address: String
  constructor(private router: Router, private SignUpPageModule: SignUpPageModule, private navController: NavController, private http: HttpClient, public httpService: HttpService) { }
  members: any[] = []
  ngOnInit() {
    // this.getMembers()
    document.getElementById("warning").style.visibility = 'hidden'
    document.getElementById("dialog").style.visibility = 'hidden'
  }
  // forget(){
  //   this.router.navigate(['/player-tabs/sign-up']);
  // }

  //   getMembers(){
  //     this.http.get('http://localhost/foodplayer/src/app/php/getMember.php').subscribe(data=>{
  //     console.log(data)
  //     for (let i=0; i<Object.keys(data).length ;i++){
  //       this.members.push( data[i])
  //     }
  //   })
  // }
  signUp() {
    this.router.navigate(['player-tabs/signUp']);
  }
  backToMember() {
    this.navController.back()
  }
  confirmSignUp() {
    if (this.password !== "" && this.password === this.reconfirmPwd) {
      document.getElementById("dialog").style.visibility = 'visible';
      setTimeout(() => {
        document.getElementById("dialog").style.visibility = 'hidden';
      }, 2500);
      setTimeout(() => {
        this.router.navigate(['player-tabs/home']);
      }, 2500);
      document.getElementById("warning").style.visibility = 'hidden';
      this.upDateSignUp()
    } else {
      document.getElementById("warning").style.visibility = 'visible';
      // document.getElementById("dialog").style.display = 'none';
      setTimeout(() => {
        document.getElementById("warning").style.visibility = 'hidden';
      }, 5500);
    }

  }
  signUpData(formData) {
    // let userName = 'deomo'
    // let userID = 'demo'
    return new Promise((resolve, reject) => {
      if (formData) {
        resolve('update')
        // formData.append('member_ID', this.member_ID)
        formData.append('member_name', this.member_name)
        formData.append('phone', this.phone)
        formData.append('email', this.email)
        formData.append('address', this.address)
        formData.append('password', this.password)
      } else {
        reject('error')
      }

    })
  }

  upDateSignUp() {
    let formData = new FormData()

    this.signUpData(formData).then((resolve) => {
      console.log(resolve)
    }).then(() => {
      formData.forEach((value, key) => {
        console.log(key + "" + value)
      })
    }).then(() => {
      let Url = 'http://localhost/foodplayer/src/app/php/signUp.php'
      this.httpService.pushData(Url, 'signUp', formData)

    }).catch((reject) => {
      console.log(reject)
    })

  }
}


