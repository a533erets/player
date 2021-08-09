import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';
import { MainPage } from './home/main/main.page';
const routes: Routes = [
  {
    path: '',
    // component: MainPage
    redirectTo: 'launch-page',
    pathMatch: 'full'
  },
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
  }

  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
  
})
export class AppRoutingModule {}
