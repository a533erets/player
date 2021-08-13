import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.page.html',
  styleUrls: ['./forget.page.scss'],
})
export class ForgetPage implements OnInit {

  constructor(public router:Router,private navController : NavController) { }

  ngOnInit() {
  }
  forget(){
    this.router.navigate(['/player-tabs/forget']);
  }
  backToMember(){
    this.navController.back()
  }
  reset(){
    this.router.navigate(['player-tabs/reset']);
  }
}

