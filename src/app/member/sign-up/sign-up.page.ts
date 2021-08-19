import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpPageModule } from './sign-up.module';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private router:Router , private SignUpPageModule:SignUpPageModule,private navController:NavController) { }

  ngOnInit() {
  }
  // forget(){
  //   this.router.navigate(['/player-tabs/sign-up']);
  // }
  signUp(){
    this.router.navigate(['player-tabs/signUp']);
  }
  
  backToMember(){
    this.navController.back()
  }
}
