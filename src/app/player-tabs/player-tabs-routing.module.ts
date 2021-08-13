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
      },
      {
        path: 'record',
        children: [
          {
            path: '',
            loadChildren: () => import('../member/record/record.module').then(m => m.RecordPageModule)
          }
        ]
      },
      {
        path: 'barcode',
        children: [
          {
            path: '',
            loadChildren: () => import('../member/barcode/barcode.module').then(m => m.BarcodePageModule)
          }
        ]
      },
      {
        path: 'barcode-expired',
        children: [
          {
            path: '',
            loadChildren: () => import('../member/barcode/barcode-expired/barcode-expired.module').then(m => m.BarcodeExpiredPageModule)
          }
        ]
      },
      {
        path: 'barcode-used',
        children: [
          {
            path: '',
            loadChildren: () => import('../member/barcode/barcode-used/barcode-used.module').then(m => m.BarcodeUsedPageModule)
          }
        ]
      },
      {
        path: 'forget',
        children: [
          {
            path: '',
            loadChildren: () => import('../member/forget/forget.module').then(m => m.ForgetPageModule)
          }
        ]
      },
      {
      path: 'edit',
      children: [
        {
          path: '',
          loadChildren: () => import('../member-information/personal-information/personal-information.module').then(m => m.PersonalInformationPageModule)
        }
      ]
    },
    {
      path: 'payment',
        children: [
          {
            path: '',
            loadChildren: () => import('../order/payment/payment.module').then( m => m.PaymentPageModule)
          }
        ]
      },
      {
        path: 'reset',
          children: [
            {
              path: '',
              loadChildren: () => import('../member/forget/reset/reset.module').then( m => m.ResetPageModule)
            }
          ]
        },
      
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerTabsPageRoutingModule { }
