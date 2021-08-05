import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaunchPagePageRoutingModule } from './launch-page-routing.module';

import { LaunchPagePage } from './launch-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaunchPagePageRoutingModule
  ],
  declarations: [LaunchPagePage]
})
export class LaunchPagePageModule {}
