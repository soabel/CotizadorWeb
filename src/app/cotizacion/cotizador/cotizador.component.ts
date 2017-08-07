import { Component, OnInit } from '@angular/core';
import { CotizacionModel, CotizacionParametro } from "./../../cotizacion/cotizador/cotizador.model";



@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {

  private model:CotizacionModel;
  private resultado: number=0;
  constructor() { 
    this.model= new CotizacionModel();
    this.model.supuestos={};
    this.model.parametros=new CotizacionParametro();
    this.model.parametros.sueldoBruto=5000;    
    this.model.parametros.costoLaboral=10;
  }

  ngOnInit() {
   


  }

}
