import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RecuperarPage } from './recuperar.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarPage
  }
];

@NgModule({
  imports: [CommonModule, IonicModule,FormsModule,ReactiveFormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarPageRoutingModule {}
