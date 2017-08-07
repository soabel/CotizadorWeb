import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { RouterModule, Routes } from "@angular/router";

import { FormsModule } from '@angular/forms';

var routes:Routes=[
  {
    path:'',
    component: CotizadorComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [CotizadorComponent]
})
export class CotizacionModule { }
