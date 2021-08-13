import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalInformationPageModule } from './personal-information.module';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.page.html',
  styleUrls: ['./personal-information.page.scss'],
})
export class PersonalInformationPage implements OnInit {

  constructor(private router:Router ,private PersonalInformationPageModule : PersonalInformationPageModule,private navController:NavController) { }

  ngOnInit() {
  }
  edit(){
    this.router.navigate(['player-tabs/edit']);
  }
  backToMemberInformation(){
    this.navController.back()
  }
}
