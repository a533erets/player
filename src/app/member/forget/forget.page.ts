import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {
  

  name:string 
  email: any
  constructor(public router:Router,private navController : NavController,private http: HttpClient) { }
  members:any[]=[]

  ngOnInit() {
    this.getMembers()
    document.getElementById("dialog").style.display = 'none'
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
  backToMember(){
    this.navController.back()
  }
  reset(){
    this.router.navigate(['player-tabs/reset']);
  }
  goToReset(){
    console.log(this.name, this.email)
    console.log(this.members)
   
    for(let i=0; i < this.members.length; i++){
     
      if(this.name ===  this.members[i].member_name && this.email=== this.members[i].email){
        const Loginstate = { ID: this.members[i].member_ID, name: this.members[i].name,  logIn: true}
        this.router.navigate(['player-tabs/reset'], {state: Loginstate})
        document.getElementById("dialog").style.display = 'none';
      }else{
        document.getElementById("dialog").style.display = 'block';
        setTimeout(() => {
          document.getElementById("dialog").style.display = 'none';
        }, 2500);
      }
    }
}
}
