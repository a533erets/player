import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service'; 
// import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.page.html',
  styleUrls: ['./bonus.page.scss'],
})
export class BonusPage implements OnInit {

  constructor(private router: Router, private navController: NavController, public http: HttpService) { }
  members: object[] = []
  products: object[] = []


  ngOnInit() {
    
  }


  bonus() {
    this.router.navigate(['player-tabs/bonus']);
  }

  backToMemberInformation() {
    this.navController.back()
  }
}
