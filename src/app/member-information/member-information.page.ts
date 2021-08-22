import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
@Component({
  selector: 'app-member-information',
  templateUrl: './member-information.page.html',
  styleUrls: ['./member-information.page.scss'],
})
export class MemberInformationPage implements OnInit {

  constructor(private http: HttpClient, public router: Router, public httpService: HttpService) { }
  members: object[] = []

  ngOnInit() {
    // this.getMembers()
    // this.getMemberInformation()
    this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')
  }
  barcode() {
    this.router.navigate(['player-tabs/barcode']);
  }
  record() {
    this.router.navigate(['player-tabs/record']);
  }
  // getMembers() {
  //   this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')



  //     .subscribe(data => {
  //       console.log(data)
  //       for (let i = 0; i < Object.keys(data).length; i++) {
  //         this.members.push(data[i])
  //       }
  //     })
  // }
  // getMemberInformation() {
  //   let Url = 'http://localhost/foodplayer/src/app/php/getMember.php'
  //   this.httpService.getData(Url, 'logIn')
  //   console.log(this.httpService.logInState.phone)
  //   // let formData = new FormData()
  //   // this.httpService.pushData('http://localhost/foodplayer/src/app/php/logIn.php', 'logIn', formData)
  //   // console.log(this.httpService.logInState.email)
  // }
  edit() {
    this.router.navigate(['player-tabs/edit']);
  }
  bonus() {
    this.router.navigate(['player-tabs/bonus']);
  }

}

