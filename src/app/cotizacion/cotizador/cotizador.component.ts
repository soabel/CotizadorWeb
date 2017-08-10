import { Component, OnInit } from '@angular/core';
import { CotizacionModel, CotizacionParametro, CotizacionSupuesto, CotizacionFacturacion, CotizacionTable, CotizacionService } from "./../../cotizacion/cotizador/cotizador.model";
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions } from '@angular/http';
import { Headers, Http, Response } from '@angular/http';
import { CotizacionServiceUtil } from './cotizador.service'

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css'],
  providers: [CotizacionServiceUtil]
})

export class CotizadorComponent implements OnInit {
  private model: CotizacionModel;
  private serviceUtil: CotizacionServiceUtil;
  private resultado: number = 0;
  
  private jsonp: Jsonp;
  private http: Http;
  errorMessage: String;

  private cotizacion:any;

  constructor(private cotizadorService: CotizacionServiceUtil) {

    this.model = new CotizacionModel();
    this.model.supuestos = new CotizacionSupuesto();
    this.model.supuestos.cliente = 'Claro';
    this.model.supuestos.duracion = 5;
    this.model.supuestos.descripcion = 'Servicio Claro';
    this.model.supuestos.plazoPago = '2';
    this.model.supuestos.responsable = 'Alfredo Benaute';

    this.model.parametros = new CotizacionParametro();
    this.model.parametros.sueldoBruto = 5000;
    this.model.parametros.costoLaboral = 10;
    this.model.parametros.hardwareSoftwareMes = 250;
    this.model.parametros.movilidadMes = 250;
    this.model.parametros.overHead = 4.5;

    this.model.facturacion = new CotizacionFacturacion();
    this.model.facturacion.costoTotal = 0;
    this.model.facturacion.grossMargin = 0;
    this.model.facturacion.precioVenta = 0;

    this.model.cotizaciones.push(<CotizacionTable>{ tipoGanancia: 'Gross Margin', descripcionServicio: '', duracion: 0, id: 1, resultadoGrossMargin: 0, resultadoPrecioVenta: 0, sueldoBrutoMensual: 0, costoTotal: 0 });

    this.model.cotizacionService = new CotizacionService();
    this.model.cotizacionService.cliente = '';
    this.model.cotizacionService.costoLaboral = 0;
    this.model.cotizacionService.costoTotal = 0;
    this.model.cotizacionService.duracion = 0;
    this.model.cotizacionService.eliminado = false;
    this.model.cotizacionService.hardwareSoftware = 0;
    this.model.cotizacionService.idCotizacion = 0;
    this.model.cotizacionService.idEstado = 1;
    this.model.cotizacionService.idResponsable = 0;
    this.model.cotizacionService.movilidad = 0;
    this.model.cotizacionService.overhead = 0;
    this.model.cotizacionService.plazoPago = 0;
  }

  ngOnInit() {

  }

  agregar() {
    this.model.cotizaciones.push(<CotizacionTable>{ tipoGanancia: 'Gross Margin', descripcionServicio: '', duracion: 0, id: this.model.cotizaciones.length + 1, resultadoGrossMargin: 0, resultadoPrecioVenta: 0, sueldoBrutoMensual: 0, costoTotal: 0 });
  }

  ingresarPropuesta() {
    console.log(this.cotizacion);
    this.cotizadorService.ingresarPropuesta(this.model.cotizacionService).then(this.cotizacion,error => this.errorMessage = <any>error);
    

  }

  calculoTableCostoTotal(): number {
    var total = 0;
    for (var count = 0; count < this.model.cotizaciones.length - 1; count++) {
      total += this.model.cotizaciones[count].costoTotal;
    }
    //this.model.facturacion.costoTotal = total;
    return total;
  };

  eliminar(indexr: number) {
    console.log(indexr);
    indexr = indexr - 1;
    this.model.cotizaciones.splice(indexr, 1);
  }

  calculoGrossMargin(id: number): number {
    if (this.model.cotizaciones[id] == null) {
      return 0;
    }

    if (this.model.cotizaciones[id].resultadoPrecioVenta == 0)
      return 0;
    if (this.model.cotizaciones[id].costoTotal == null)
      this.model.cotizaciones[id].costoTotal = 0;
    var totalGrosMargin = 0;
    totalGrosMargin = ((this.model.cotizaciones[id].resultadoPrecioVenta - this.model.cotizaciones[id].costoTotal) / this.model.cotizaciones[id].resultadoPrecioVenta) * 100;
    this.model.cotizaciones[id].resultadoGrossMargin = totalGrosMargin;
    return totalGrosMargin;
  }

  CalculoGrossMarginTable(): number {
    var totalPrecioVenta = this.CalculoPrecioVentaTable();
    var totalCostoTotal = this.calculoTableCostoTotal();
    if (totalPrecioVenta == 0)
      return 0;
    if (totalCostoTotal == null)
      totalCostoTotal = 0;
    var totalGrosMargin = 0;
    totalGrosMargin = ((totalPrecioVenta - totalCostoTotal) / totalPrecioVenta) * 100;
    return totalGrosMargin;
  }

  CalculoPrecioVentaTable(): number {
    var total = 0;
    var movilidad = this.model.parametros.movilidadMes;
    var hrdsoft = this.model.parametros.hardwareSoftwareMes;
    for (var count = 0; count < this.model.cotizaciones.length - 1; count++) {
      total += this.model.cotizaciones[count].resultadoPrecioVenta;
    }
    total += movilidad + hrdsoft;
    total += (total * this.model.parametros.overHead) / 100;
    return total;
  }



}


