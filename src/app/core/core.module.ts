import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router'


import { ShellComponent } from './shell/shell.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';


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
    RouterModule.forRoot(routes)
  ],
  declarations: [ShellComponent, LayoutDefaultComponent]
})
export class CoreModule { }
