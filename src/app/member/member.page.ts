import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

  constructor(private http: HttpClient, public router: Router) { }
   members:Object[]=[]
  ngOnInit() {
    this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')

.subscribe(data=>{
  console.log(data);
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
}
