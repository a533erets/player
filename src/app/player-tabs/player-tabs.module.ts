import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerTabsPageRoutingModule } from './player-tabs-routing.module';

import { PlayerTabsPage } from './player-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerTabsPageRoutingModule
  ],
  declarations: [PlayerTabsPage]
})
export class PlayerTabsPageModule {}
