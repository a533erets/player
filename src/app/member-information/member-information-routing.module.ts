import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberInformationPage } from './member-information.page';

const routes: Routes = [
  {
    path: '',
    component: MemberInformationPage
  },
  {
    path: 'personal-information',
    loadChildren: () => import('./personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  },
  {
    path: 'bouns',
    loadChildren: () => import('./bonus/bonus.module').then( m => m.BonusPageModule)
  },
  {
    path: 'bonus',
    loadChildren: () => import('./bonus/bonus.module').then( m => m.BonusPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberInformationPageRoutingModule {}
