import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreSituationPage } from './store-situation.page';

const routes: Routes = [
  {
    path: '',
    component: StoreSituationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreSituationPageRoutingModule {}
