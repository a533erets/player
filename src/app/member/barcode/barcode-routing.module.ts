import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarcodePage } from './barcode.page';

const routes: Routes = [
  {
    path: '',
    component: BarcodePage
  },
  {
    path: 'barcode-used',
    loadChildren: () => import('./barcode-used/barcode-used.module').then( m => m.BarcodeUsedPageModule)
  },
  {
    path: 'barcode-expired',
    loadChildren: () => import('./barcode-expired/barcode-expired.module').then( m => m.BarcodeExpiredPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarcodePageRoutingModule {}
