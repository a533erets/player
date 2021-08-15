import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
newPwd:string;
reconfirmPwd:string;
  constructor(public router:Router,private navController : NavController,private http: HttpClient) { }
  members:any[]=[]
  ngOnInit() {

    this.getMembers()
    document.getElementById("dialog").style.display = 'none'
    document.getElementById("warning").style.display='none'
  }

  getMembers(){
    this.http.get('http://localhost/foodplayer/src/app/php/getMember.php').subscribe(data=>{
    console.log(data)
    for (let i=0; i<Object.keys(data).length ;i++){
      this.members.push( data[i])
    }
  })
}
  reset(){
    this.router.navigate(['player-tabs/reset']);
  }
  backToMember(){
    this.navController.back()
  }
  confirmReset(){
    console.log(this.newPwd, this.reconfirmPwd)
    console.log(this.members)
   
    for(let i=0; i < this.members.length; i++){
     
      if(this.newPwd ===  this.reconfirmPwd){
        // const Loginstate = { ID: this.members[i].member_ID, name: this.members[i].name,  logIn: true}
        // {state: Loginstate})
       
        document.getElementById("dialog").style.display = 'block';
        setTimeout(() => {
          document.getElementById("dialog").style.display = 'none';
        }, 6500);
        setTimeout(() => {
          this.router.navigate(['player-tabs/home']);
        }, 2000);
   
      }else{
        document.getElementById("dialog").style.display = 'none';
        document.getElementById("warning").style.display='block';
      }
}
  }
}
