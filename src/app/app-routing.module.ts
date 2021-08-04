import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BeginningPage } from './beginning/beginning.page';
import { HomePage } from './home/home.page';
import { OrderPage } from './order/order.page';

const routes: Routes = [
  {
    path: '',
    children: [
    
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'store-situation',
    loadChildren: () => import('./store-situation/store-situation.module').then( m => m.StoreSituationPageModule)
  },
  {
    path: 'delivery-tracking',
    loadChildren: () => import('./delivery-tracking/delivery-tracking.module').then( m => m.DeliveryTrackingPageModule)
  },
  {
    path: 'member',
    loadChildren: () => import('./member/member.module').then( m => m.MemberPageModule)
  },
  {
    path: '',
    redirectTo: '/home/',
    pathMatch: 'full'
  }
]
  },
  {
    path: 'beginning',
    loadChildren: () => import('./beginning/beginning.module').then( m => m.BeginningPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}
