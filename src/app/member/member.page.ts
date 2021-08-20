import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(public httpService: HttpService, private http: HttpClient, public router: Router) { }
  members: any[] = []
  ngOnInit() {
    // this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')
    this.getMembers()
    document.getElementById("warning").style.visibility = 'hidden';
  }
  getMembers() {
    this.http.get('http://localhost/foodplayer/src/app/php/getMember.php').subscribe(data => {
      console.log(data)
      for (let i = 0; i < Object.keys(data).length; i++) {
        this.members.push(data[i])
      }
    })
  }
  forget() {
    this.router.navigate(['/player-tabs/forget']);
  }
  signUp() {
    this.router.navigate(['player-tabs/signUp']);
  }

  userLogin() {
    console.log(this.account, this.pwd)
    console.log(this.members)
    for (let i = 0; i < this.members.length; i++) {
      if ((this.account === this.members[i].phone || this.account === this.members[i].email) && this.pwd === this.members[i].password) {
        this.httpService.logInState = { ID: this.members[i].member_ID, name: this.members[i].name, logIn: true }
        let formData = new FormData()

        this.prepareData(formData).then(resolve => {
          console.log(resolve)
        }).then(() => {
          formData.forEach((value, key) => {
            console.log(key + value)
          })
        }).then(() => {
          this.httpService.pushData('http://localhost/foodplayer/src/app/php/logIn.php', 'logIn', formData)
        }).catch((reject) => {
          console.log(reject)
        })

        this.router.navigate(['player-tabs/home'])
      } else {
        // document.getElementById("warning").innerHTML = '帳號或密碼錯誤'
        document.getElementById("warning").style.visibility = 'visible';
        setTimeout(() => {
          document.getElementById("warning").style.visibility = 'hidden';
        }, 5500);
      }
    }
  }

  prepareData(formData) {
    return new Promise((resolve, reject) => {
      if (formData) {
        resolve('procced')
        formData.append('account', this.account)
        formData.append('password', this.pwd)
      } else {
        reject('error')
      }
    })
  }

}


