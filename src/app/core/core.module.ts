import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'

import { HttpModule } from '@angular/http';


import { ShellComponent } from './shell/shell.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { AdalServices } from "app/core/shell/adal.service";

import {AdalService} from 'ng2-adal/core';

const routes: Routes=[
  {
    path:'',
    component:LayoutDefaultComponent,
    loadChildren: './../home/home.module#HomeModule'//,
    //canActivate:''
  },
  {
    path:'home',
    component:LayoutDefaultComponent,
    loadChildren: './../home/home.module#HomeModule'//,
    //canActivate:''
  },
  {
    path:'cotizador',
    component:LayoutDefaultComponent,
    loadChildren: './../cotizacion/cotizacion.module#CotizacionModule'//,
    //canActivate:''
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  declarations: [ShellComponent, LayoutDefaultComponent],
  providers:[AdalService, AdalServices]
})
export class CoreModule { }
