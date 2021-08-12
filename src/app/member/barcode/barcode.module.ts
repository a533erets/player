import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarcodePageRoutingModule } from './barcode-routing.module';

import { BarcodePage } from './barcode.page';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarcodePageRoutingModule,
    HttpClientModule
  ],
  providers:[HttpClient],
  declarations: [BarcodePage]
})
export class BarcodePageModule {}
