import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodeUsedPageRoutingModule } from './barcode-used-routing.module';

import { BarcodeUsedPage } from './barcode-used.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodeUsedPageRoutingModule
  ],
  declarations: [BarcodeUsedPage]
})
export class BarcodeUsedPageModule {}
