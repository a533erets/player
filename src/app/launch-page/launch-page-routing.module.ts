import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchPagePage } from './launch-page.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchPagePage
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchPagePageRoutingModule {}
