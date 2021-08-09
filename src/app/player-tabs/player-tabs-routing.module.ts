import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../home/home.page';

import { PlayerTabsPage } from './player-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerTabsPage,
    children: [
      {
        path: '',
        children: [
          {
            path: 'home',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'advertise',
        children: [
          {
                path: '',
                loadChildren: () => import('../home/advertise/advertise.module').then(m => m.AdvertisePageModule)
          }
        ]
      },
      {
        path: 'main',
        children: [
          {
                path: '',
                loadChildren: () => import('../home/main/main.module').then(m => m.MainPageModule)
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
            loadChildren: () => import('../member-information/member-information.module').then(m => m.MemberInformationPageModule)
          }
        ]
      },
      {
        path: 'login',
        children: [
          {
            path: '',
            loadChildren: () => import('../member/member.module').then(m => m.MemberPageModule)
          }
        ]
      },
      {
        path: 'signUp',
        children: [
          {
            path: '',
            loadChildren: () => import('../member/sign-up/sign-up.module').then(m => m.SignUpPageModule)
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
export class PlayerTabsPageRoutingModule {}
