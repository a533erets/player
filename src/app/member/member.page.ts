import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

  account: string
  pwd: any

  constructor(public http: HttpService, public router: Router) { }
  members: any[] = []
  ngOnInit() {
  }

  forget() {
    this.router.navigate(['/player-tabs/forget']);
  }
  signUp() {
    this.router.navigate(['player-tabs/signUp']);
  }

  ionViewWillEnter(){
    if(this.http.checkLogIn() === true){
      this.router.navigate(['/player-tabs/member'])
    }
  }

  userLogin() {
    console.log(this.account, this.pwd)
    console.log(this.members)

    if(this.account !== '' && this.pwd !== '') {
      let formData = new FormData()

      this.prepareData(formData).then(resolve => {
        console.log(resolve)
      }).then(() => {
        formData.forEach((value, key) => {
          console.log(key + value)
        })
      }).then(() => {
        
        if(this.http.logInState.logIn === false && formData !== undefined) {
          console.log('logIn strated')
          this.http.pushData('http://localhost/foodplayer/src/app/php/logIn.php', 'logIn', formData)
        } else {
          console.log('logIn falied')
        }

      }).catch((reject) => {
        console.log(reject)
      })
    } else {
      this.http.checkIfuserExist.visible = 'visible';
      setTimeout(() => {
        this.http.checkIfuserExist.visible = 'hidden';
      }, 2500);
    }
    
  }

  prepareData(formData) {
    return new Promise((resolve, reject) => {
      if(formData !== undefined) {
        resolve('procced')
        formData.append('account', this.account)
        formData.append('password', this.pwd)
      } else {
        reject('error')
      }
    })
  }
}
