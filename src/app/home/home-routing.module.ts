import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'order',
        children: [
          {
            path: '',
            loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
          }
        ]
      },
      {
        path: 'order',
        children: [
          {
            path: '',
            loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
          }
        ]
      },
      {
        path: 'store-situation',
        children: [
          {
            path: '',
            loadChildren: () => import('../store-situation/store-situation.module').then(m => m.StoreSituationPageModule)
          }
        ]
      },
      {
        path: 'delivery-tracking',
        children: [
          {
            path: '',
            loadChildren: () => import('../delivery-tracking/delivery-tracking.module').then(m => m.DeliveryTrackingPageModule)
          }
        ]
      },
      {
        path: 'member',
        children: [
          {
            path: '',
            loadChildren: () => import('../member/member.module').then(m => m.MemberPageModule)
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}