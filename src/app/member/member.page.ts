import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

  constructor(private http: HttpClient, public router: Router) { }
   members:object[]=[]
  ngOnInit() {
    // this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')
    
this.getMembers
  }
  getMembers(){
    this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')
.subscribe(data=>{
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
 
// userLogin(){
//   var account: any;
//   var pwd:any;
//   if(account.value = (this.members[0].phone||this.members[0].email)&&(pwd.value=this.members.password)){
   
//   }
// }
      
    }
  

