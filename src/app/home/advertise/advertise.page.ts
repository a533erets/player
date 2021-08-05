import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.page.html',
  styleUrls: ['./advertise.page.scss'],
})
export class AdvertisePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  home(){
    this.router.navigate(['/home']);
  }
 

}
