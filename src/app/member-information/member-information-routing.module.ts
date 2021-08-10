import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberInformationPage } from './member-information.page';

const routes: Routes = [
  {
    path: '',
    component: MemberInformationPage
  },  {
    path: 'personal-information',
    loadChildren: () => import('./personal-information/personal-information.module').then( m => m.PersonalInformationPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberInformationPageRoutingModule {}
