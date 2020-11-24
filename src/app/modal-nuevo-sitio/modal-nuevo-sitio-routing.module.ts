import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNuevoSitioPage } from './modal-nuevo-sitio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevoSitioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNuevoSitioPageRoutingModule {}
