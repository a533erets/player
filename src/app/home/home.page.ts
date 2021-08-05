import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  advertise(){
    this.router.navigate(['/advertise']);
    // this.navCtrl.navigateForward(['/advertise']);
  }
  home(){
    this.router.navigate(['/home']);
  }
  
}
