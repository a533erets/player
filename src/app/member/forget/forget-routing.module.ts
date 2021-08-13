import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgetPage } from './forget.page';

const routes: Routes = [
  {
    path: '',
    component: ForgetPage
  },  {
    path: 'reset',
    loadChildren: () => import('./reset/reset.module').then( m => m.ResetPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForgetPageRoutingModule {}
