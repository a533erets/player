import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { Router } from '@angular/router';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
//-------------------
// / <reference path="../../../typings/main/ambient/fbsdk/index.d.ts" />
@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

  account: string
  pwd: any
  // isLoggedIn = false;
  // users = { 
  //     id: '', 
  //     name: '', 
  //     email: '', 
  //     picture: { 
  //         data: { 
  //             url: '' 
  //         } 
  //     } 
  // };
  constructor(public http: HttpService, public router: Router) { 
  //   if (!window.fbAsyncInit) {
  //     console.log('define');
  //     window.fbAsyncInit = function() {
  //         FB.init({
  //             appId: appID,
  //             xfbml: true,
  //             version: 'v2.5'
  //         });
  //     };
  // }
  // fb.getLoginStatus()
  // .then(res => {
  //   console.log(res.status);
  //   if (res.status === 'connect') {
  //     this.isLoggedIn = true;
  //   } else {
  //     this.isLoggedIn = false;
  //   }
  // })
  // .catch(e => console.log(e));
  // }
//--------------------------------


  // fbLogin() {
  //   this.fb.login(['public_profile', 'user_friends', 'email'])
  //     .then(res => {
  //       if (res.status === 'connected') {
  //         this.isLoggedIn = true;
  //         this.getUserDetail(res.authResponse.userID);
  //       } else {
  //         this.isLoggedIn = false;
  //       }
  //     })
  //     .catch(e => console.log('Error logging into Facebook', e));
  // }
  // getUserDetail(userid: any) {
  //   this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
  //     .then(res => {
  //       console.log(res);
  //       this.users = res;
  //     })
  //     .catch(e => {
  //       console.log(e);
  //     });
  // }
  // logout() {
  //   this.fb.logout()
  //     .then( res => this.isLoggedIn = false)
  //     .catch(e => console.log('Error logout from Facebook', e));
 }
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
          console.log('logIn started')
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
  
//   initFB() {
//     var js: any,
//         id = 'facebook-jssdk',
//         ref = document.getElementsByTagName('script')[0];

//     if (document.getElementById(id)) {
//         return;
//     }

//     js = document.createElement('script');
//     js.id = id;
//     js.async = true;
//     js.src = "//connect.facebook.net/en_US/sdk.js";

//     ref.parentNode.insertBefore(js, ref);
// }
//-----------------------------------------------//
// this.fb.login(['public_profile', 'user_friends', 'email'])
//   .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
//   .catch(e => console.log('Error logging into Facebook', e));


// this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
}
