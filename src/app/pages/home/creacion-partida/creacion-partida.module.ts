import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreacionPartidaPageRoutingModule } from './creacion-partida-routing.module';

import { CreacionPartidaPage } from './creacion-partida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreacionPartidaPageRoutingModule
  ],
  declarations: [CreacionPartidaPage]
})
export class CreacionPartidaPageModule {}
