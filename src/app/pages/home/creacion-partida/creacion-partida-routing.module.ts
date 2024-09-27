import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreacionPartidaPage } from './creacion-partida.page';

const routes: Routes = [
  {
    path: '',
    component: CreacionPartidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreacionPartidaPageRoutingModule {}
