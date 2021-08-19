import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpPageModule } from './sign-up.module';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  newPwd:string;
  reconfirmPwd:string;
  member_name: String
  phone: Number
  email: String
  address: String
  constructor(private router:Router , private SignUpPageModule:SignUpPageModule,private navController:NavController,private http: HttpClient) { }
  members:any[]=[]
  ngOnInit() {
    this.getMembers()
    document.getElementById("warning").style.visibility='hidden'
    document.getElementById("dialog").style.visibility = 'hidden'
  }
  // forget(){
  //   this.router.navigate(['/player-tabs/sign-up']);
  // }

  getMembers(){
    this.http.get('http://localhost/foodplayer/src/app/php/getMember.php').subscribe(data=>{
    console.log(data)
    for (let i=0; i<Object.keys(data).length ;i++){
      this.members.push( data[i])
    }
  })
}
  signUp(){
    this.router.navigate(['player-tabs/signUp']);
  }
  backToMember(){
    this.navController.back()
  }
  confirmSignUp(){
    if( this.newPwd!=="" && this.newPwd ===  this.reconfirmPwd  ){
      document.getElementById("dialog").style.visibility = 'visible';
      setTimeout(() => {
        document.getElementById("dialog").style.visibility = 'hidden';
      }, 2500);
      setTimeout(() => {
        this.router.navigate(['player-tabs/home']);
      }, 2500);
      document.getElementById("warning").style.visibility = 'hidden';
      }else{
        document.getElementById("warning").style.visibility='visible';
        // document.getElementById("dialog").style.display = 'none';
        setTimeout(() => {
          document.getElementById("warning").style.visibility= 'hidden';
        }, 5500);
      }

  }
}
  

