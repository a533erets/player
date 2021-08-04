import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayerTabsPage } from './player-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PlayerTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayerTabsPageRoutingModule {}
