import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../service/http.service';
@Component({
  selector: 'app-member-information',
  templateUrl: './member-information.page.html',
  styleUrls: ['./member-information.page.scss'],
})
export class MemberInformationPage implements OnInit {

  constructor(public router: Router, public httpService: HttpService) { }
  members: object[] = []

  ngOnInit() {

  }

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

}

