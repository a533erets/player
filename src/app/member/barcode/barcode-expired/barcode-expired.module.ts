import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodeExpiredPageRoutingModule } from './barcode-expired-routing.module';

import { BarcodeExpiredPage } from './barcode-expired.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodeExpiredPageRoutingModule
  ],
  declarations: [BarcodeExpiredPage]
})
export class BarcodeExpiredPageModule {}
