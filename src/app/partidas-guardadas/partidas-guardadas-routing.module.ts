import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartidasGuardadasPage } from './partidas-guardadas.page';

const routes: Routes = [
  {
    path: '',
    component: PartidasGuardadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartidasGuardadasPageRoutingModule {}
