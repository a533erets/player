import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberInformationPageRoutingModule } from './member-information-routing.module';

import { MemberInformationPage } from './member-information.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberInformationPageRoutingModule
  ],
  declarations: [MemberInformationPage]
})
export class MemberInformationPageModule {}
