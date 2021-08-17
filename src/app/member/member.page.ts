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

  account:string 
  pwd: any

  constructor(public httpService: HttpService, private http: HttpClient, public router: Router) { }
   members:any[]=[]
  ngOnInit() {
    // this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')
    this.getMembers()
    // document.getElementById("warning").style.display = 'block';
  }
  getMembers(){
    this.http.get('http://localhost/foodplayer/src/app/php/getMember.php').subscribe(data=>{
    console.log(data)
    for (let i=0; i<Object.keys(data).length ;i++){
      this.members.push( data[i])
    }
  })
}
  forget(){
    this.router.navigate(['/player-tabs/forget']);
  }
  signUp(){
    this.router.navigate(['player-tabs/signUp']);
  }
 
userLogin(){
  console.log(this.account, this.pwd)
  console.log(this.members)
  for(let i=0; i < this.members.length; i++){
    if((this.account === this.members[i].phone || this.account === this.members[i].email )&& this.pwd === this.members[i].password){
      this.httpService.logInState = { ID: this.members[i].member_ID, name: this.members[i].name,  logIn: true}
      this.router.navigate(['player-tabs/home'])
    }else{
      document.getElementById("warning").innerHTML = '帳號或密碼錯誤'
      // document.getElementById("warning").style.display = 'block';
      // setTimeout(() => {
      //   document.getElementById("warning").style.display = 'none';
      // }, 5500);
    }
  }
}
// function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
//   console.log('statusChangeCallback');
//   console.log(response);                   // The current login status of the person.
//   if (response.status === 'connected') {   // Logged into your webpage and Facebook.
//     testAPI();  
//   } else {                                 // Not logged into your webpage or we are unable to tell.
//     document.getElementById('status').innerHTML = 'Please log ' +
//       'into this webpage.';
//   }
// }


// function checkLoginState() {               // Called when a person is finished with the Login Button.
//   FB.getLoginStatus(function(response) {   // See the onlogin handler
//     statusChangeCallback(response);
//   });
// }


// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : '{app-id}',
//     cookie     : true,                     // Enable cookies to allow the server to access the session.
//     xfbml      : true,                     // Parse social plugins on this webpage.
//     version    : '{api-version}'           // Use this Graph API version for this call.
//   });


//   FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
//     statusChangeCallback(response);        // Returns the login status.
//   });
// };

// function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
//   console.log('Welcome!  Fetching your information.... ');
//   FB.api('/me', function(response) {
//     console.log('Successful login for: ' + response.name);
//     document.getElementById('status').innerHTML =
//       'Thanks for logging in, ' + response.name + '!';
//   });
    }
  

