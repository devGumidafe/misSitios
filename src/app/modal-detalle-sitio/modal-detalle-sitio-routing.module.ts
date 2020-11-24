import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDetalleSitioPage } from './modal-detalle-sitio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDetalleSitioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDetalleSitioPageRoutingModule {}
