import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-member-information',
  templateUrl: './member-information.page.html',
  styleUrls: ['./member-information.page.scss'],
})
export class MemberInformationPage implements OnInit {

  constructor(private http: HttpClient) { }
   members:object[]=[]
   
  ngOnInit() {
    this.getMembers()

  
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
}