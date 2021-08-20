import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { HttpService } from 'src/app/service/http.service';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
  

  member_name:string 
  email: any
  constructor(public router:Router,private navController : NavController,private http: HttpClient,public httpService: HttpService) { }
  members:any[]=[]

  ngOnInit() {
  
    document.getElementById("dialog").style.visibility= 'hidden'
  }

  forget(){
    this.router.navigate(['/player-tabs/forget']);
  }
  backToMember(){
    this.navController.back()
  }
  reset(){
    this.router.navigate(['player-tabs/reset']);
  }
  goToReset(){
    console.log(this.member_name, this.email)
    console.log(this.members)
   
    let formData = new FormData()

    this.prepareData(formData).then(resolve=>{
      console.log(resolve)
    }).then(()=>{
      formData.forEach((value, key)=>{
        console.log(key + value)
      })
    }).then(()=>{
      if(this.httpService.pushData('http://localhost/foodplayer/src/app/php/resetPassword.php', 'checkUser', formData)){
        console.log('it worked?')
        this.router.navigate(['player-tabs/reset'])
      }else{
        document.getElementById("dialog").style.visibility= 'visible';
        setTimeout(() => {
          document.getElementById("dialog").style.visibility = 'hidden';
        }, 2500);
      }
    }).catch((reject)=>{
      console.log(reject)
    })
    document.getElementById("dialog").style.visibility = 'hidden';
}

prepareData(formData){
  return new Promise((resolve, reject)=>{
    if(formData){
      resolve('procced')
      formData.append('member_name', this.member_name)
      formData.append('email', this.email)
      formData.append('mode', 'checkUser')
    }else{
      reject('error')
    }
  })
}
}
