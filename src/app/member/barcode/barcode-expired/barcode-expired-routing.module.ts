import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodeExpiredPage } from './barcode-expired.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodeExpiredPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodeExpiredPageRoutingModule {}
