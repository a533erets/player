import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpService } from '../../../service/http.service';
// import { HttpClient } from '@angular/common/http';
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

       let dialog = <HTMLElement>document.getElementById("dialog")
        dialog.style['visibility'] = 'visible';
        setTimeout(() => {
          dialog.style['visibility'] = 'hidden';;
        }, 2500);
        this.resetPassword()
      }else{
        document.getElementById("dialog").style.visibility = 'hidden';
        document.getElementById("warning").style.visibility='visible';
        // document.getElementById("warning").innerHTML = '兩個密碼需相同'
        setTimeout(() => {
          document.getElementById("warning").style.visibility= 'hidden';
        }, 5500);
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
        if(this.http.pushData(Url, 'reset', formData)){
          setTimeout(() => {
            this.router.navigate(['player-tabs/home']);
          }, 2500);
        }else{
          console.log('error')
        }
      }).catch((reject)=>{
        console.log(reject)
      })

    }
}
