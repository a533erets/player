import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-player-tabs',
  templateUrl: './player-tabs.page.html',
  styleUrls: ['./player-tabs.page.scss'],
})
export class PlayerTabsPage implements OnInit {

  constructor(public http: HttpService) { }

  ngOnInit() {
  }

}
