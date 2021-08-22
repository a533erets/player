import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.page.html',
  styleUrls: ['./bonus.page.scss'],
})
export class BonusPage implements OnInit {

  constructor(private router: Router, private navController: NavController, private http: HttpClient) { }
  members: object[] = []
  products: object[] = []


  ngOnInit() {
    this.getMembers()
  }
  getMembers() {
    this.http.get('http://localhost/foodplayer/src/app/php/getMember.php')



      .subscribe(data => {
        console.log(data)
        for (let i = 0; i < Object.keys(data).length; i++) {
          this.members.push(data[i])
        }
      })
  }
  bonus() {
    this.router.navigate(['player-tabs/bonus']);
  }
  backToMemberInformation() {
    this.navController.back()
  }


}
