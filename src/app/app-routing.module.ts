import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'launch-page',
    pathMatch: 'full'
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
    path: 'login',
    loadChildren: () => import('./member/member.module').then( m => m.MemberPageModule)
  },
  {
    path: 'member',
    loadChildren: () => import('./member-information/member-information.module').then( m => m.MemberInformationPageModule)
  },
  {
    path: 'player-tabs',
    loadChildren: () => import('./player-tabs/player-tabs.module').then( m => m.PlayerTabsPageModule)
  },
  {
    path: 'launch-page',
    loadChildren: () => import('./launch-page/launch-page.module').then( m => m.LaunchPagePageModule)
  },
 
  {
    path: 'advertise',
    loadChildren: () => import('./home/advertise/advertise.module').then( m => m.AdvertisePageModule)
  },
  {
    path:'main',
    loadChildren: () => import('./home/main/main.module').then( m => m.MainPageModule)
  },
  {
    path:'record',
    loadChildren: () => import('./member/record/record.module').then( m => m.RecordPageModule)
  },
  {
    path:'barcode',
    loadChildren:() => import('./member/barcode/barcode.module').then( m => m.BarcodePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}
