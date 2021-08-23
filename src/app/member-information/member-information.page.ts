import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
@Component({
  selector: 'app-member-information',
  templateUrl: './member-information.page.html',
  styleUrls: ['./member-information.page.scss'],
})
export class MemberInformationPage implements OnInit {

  constructor(public router: Router, public http: HttpService) { }
  members: object[] = []

  ngOnInit() {
    
  }

  // ionViewWillEnter(){
  //   if(this.http.logInState.logIn === false){
  //     this.router.navigate(['player-tabs/main'])
  //   }
  // }

  barcode() {
    this.router.navigate(['player-tabs/barcode']);
  }

  record() {
    this.router.navigate(['player-tabs/record']);
  }
  
  edit() {
    this.router.navigate(['player-tabs/edit']);
  }
  bonus() {
    this.router.navigate(['player-tabs/bonus']);
  }
logOut(){
  // this.http.logInState.logIn=false
  // console.log("abc")
  let Url = 'http://localhost/foodplayer/src/app/php/logIn.php'
this.http.pushData(Url,'logOut',null)
this.router.navigate(['player-tabs/main']);

}
}

