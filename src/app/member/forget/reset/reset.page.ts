import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpService } from '../../../service/http.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {

reconfirmPwd:string;
  constructor(public router:Router,private navController : NavController,public http : HttpService) { }
  password:string
  
  ngOnInit() {
    document.getElementById("dialog").style.visibility = 'hidden'
    document.getElementById("warning").style.visibility='hidden'
  }

  reset(){
    this.router.navigate(['player-tabs/reset']);
  }
  backToMember(){
    this.navController.back()
  }
  confirmReset(){
    console.log(this.password, this.reconfirmPwd)
      if(this.password ===  this.reconfirmPwd && this.password!==""){
        this.http.checkIfuserExist.visible = 'visible'
        this.http.checkIfuserExist.translate = 'translateY(0vh)'
        setTimeout(() => {
          this.http.checkIfuserExist.visible = 'hidden'
          this.http.checkIfuserExist.translate = 'translateY(-12vh)'
        }, 2500);
        this.resetPassword()
      }else{
        document.getElementById("warning").style.visibility='visible';
       
        setTimeout(() => {
          document.getElementById("warning").style.visibility= 'hidden';
        }, 2500);
      }
  }
  editPassword(formData){
    return new Promise((resolve, reject)=>{
      if(formData){
        resolve('update')
        formData.append('member_name', this.http.logInState.name)
        formData.append('password', this.password)
        formData.append('mode', 'resetPassword')
      }else{
        reject('error')
      }
      
    })
  }

  resetPassword(){
    let formData = new FormData()

      this.editPassword(formData).then((resolve) => {
        console.log(resolve)
      }).then(()=>{
        formData.forEach((value,key)=>{
          console.log(key+""+value)
        })
      }).then(()=>{
        let Url = 'http://localhost/foodplayer/src/app/php/resetPassword.php'
        this.http.pushData(Url, 'reset', formData)
      }).catch((reject)=>{
        console.log(reject)
      })

    }
}
