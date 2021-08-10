import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvertisePage } from './advertise.page';

const routes: Routes = [
  {
    path: '',
    component: AdvertisePage,
    children:
    [
      {
        path:'',
        loadChildren: () => import('../main/main.module').then(m => m.MainPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisePageRoutingModule {}
