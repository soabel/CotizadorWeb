import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotizadorComponent } from './cotizador/cotizador.component';
import { RouterModule, Routes } from "@angular/router";

var routes:Routes=[
  {
    path:'',
    component: CotizadorComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CotizadorComponent]
})
export class CotizacionModule { }
