import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreSituationPageRoutingModule } from './store-situation-routing.module';

import { StoreSituationPage } from './store-situation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreSituationPageRoutingModule
  ],
  declarations: [StoreSituationPage]
})
export class StoreSituationPageModule {}
