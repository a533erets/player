import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisePageModule } from '../advertise/advertise.module';
@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.page.html',
  styleUrls: ['./advertise.page.scss'],
})
export class AdvertisePage implements OnInit {

  constructor(private router:Router,private AdvertisePageModule: AdvertisePageModule) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['/player-tabs/home']);
  }
  close(){
    this.router.navigate(['/player-tabs/main']);
  }
 

}
