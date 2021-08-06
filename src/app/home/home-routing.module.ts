import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        children: [
          {
            path: 'advertise',
            loadChildren: () => import('../home/advertise/advertise.module').then(m => m.AdvertisePageModule)
          },
          {
            path: 'main',
            loadChildren: () => import('./main/main.module').then(m => m.MainPageModule)
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }