import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDetalleSitioPageRoutingModule } from './modal-detalle-sitio-routing.module';

import { ModalDetalleSitioPage } from './modal-detalle-sitio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDetalleSitioPageRoutingModule
  ],
  declarations: [ModalDetalleSitioPage]
})
export class ModalDetalleSitioPageModule {}
