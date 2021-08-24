import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
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
  constructor(private router: Router, private navController: NavController, public http: HttpService) { }
  members: any[] = []
  ngOnInit() {
    // this.getMembers()
    document.getElementById("dialog").style.visibility = 'hidden'
  }

  backToMember() {
    this.navController.back()
  }

  confirmSignUp() {
    let modal, modalContent, warning
    modal = document.getElementById("myModal")
    modalContent = document.getElementById("dialog")
    warning = document.getElementById("warning")
    if (this.password !== "" && this.password === this.reconfirmPwd) {
      modalContent.style['visibility'] = 'visible'
      modal.style['transform'] = 'translateY(0vh)'
      setTimeout(() => {
        modalContent.style['visibility'] = 'hidden';
        modal.style['transform'] = 'translateY(-12vh)'
      }, 2500);
      setTimeout(() => {
        this.router.navigate(['player-tabs/main']);
      }, 3000);
      warning.style['visibility'] = 'hidden';
      this.upDateSignUp()
    } else {
      warning.style['visibility'] = 'visible';
      setTimeout(() => {
        document.getElementById("warning").style.visibility = 'hidden';
      }, 5500);
    }

  }
  signUpData(formData) {
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
      this.http.pushData(Url, 'signUp', formData)

    }).catch((reject) => {
      console.log(reject)
    })

  }
}
