import { Component, OnInit } from '@angular/core';
import { CotizacionModel, CotizacionParametro, CotizacionSupuesto, CotizacionFacturacion, CotizacionTable } from "./../../cotizacion/cotizador/cotizador.model";



@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})

export class CotizadorComponent implements OnInit {
  private model: CotizacionModel;
  private resultado: number = 0;
  constructor() {
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
    this.model.parametros.hardwareSoftwareMes = 0;
    this.model.parametros.movilidadMes = 0;
    this.model.parametros.overHead = 0;

    this.model.facturacion = new CotizacionFacturacion();
    this.model.facturacion.costoTotal = 0;
    this.model.facturacion.grossMargin = 30;
    this.model.facturacion.precioVenta = 0;

    this.model.cotizaciones.push(<CotizacionTable>{ tipoGanancia: 'Gross Margin', descripcionServicio: '', duracion: 0, id: 1, resultadoGrossMargin: 0, resultadoPrecioVenta: 0, sueldoBrutoMensual: 0, costoTotal: 0 });
  }

  ngOnInit() {

  }

  agregar() {
    this.model.cotizaciones.push(<CotizacionTable>{ tipoGanancia: 'Gross Margin', descripcionServicio: '', duracion: 0, id: this.model.cotizaciones.length + 1, resultadoGrossMargin: 0, resultadoPrecioVenta: 0, sueldoBrutoMensual: 0, costoTotal: 0 });
  }

  calculoTableCostoTotal(): number {
    var total = 0;
    for (var count = 0; count < this.model.cotizaciones.length - 1; count++) {
      total += this.model.cotizaciones[count].costoTotal;
    }
    //this.model.facturacion.costoTotal = total;
    return total;
  };

  calculoGrossMargin(id: number): number {
    if (this.model.cotizaciones[id].resultadoPrecioVenta == 0)
      return 0;
    if (this.model.cotizaciones[id].costoTotal == null)
      this.model.cotizaciones[id].costoTotal = 0;
    var totalGrosMargin = 0;
    totalGrosMargin = ((this.model.cotizaciones[id].resultadoPrecioVenta - this.model.cotizaciones[id].costoTotal) / this.model.cotizaciones[id].resultadoPrecioVenta) * 100;
    this.model.cotizaciones[id].resultadoGrossMargin=totalGrosMargin;
    return totalGrosMargin;
  }

  keypress = function ($event) {
    var total = 0;
    for (var count = 0; count < this.model.cotizaciones.length - 1; count++) {
      total += this.model.cotizaciones[count].costoTotal;
    }
    this.model.facturacion.costoTotal = total;
  };

  CalculoGrossMarginTable(): number {
    var totalPrecioVenta = this.CalculoPrecioVentaTable();
    var totalCostoTotal = this.calculoTableCostoTotal();
     if (totalPrecioVenta== 0)
      return 0;
    if (totalCostoTotal == null)
      totalCostoTotal = 0;
    var totalGrosMargin = 0;
    totalGrosMargin = ((totalPrecioVenta - totalCostoTotal) / totalPrecioVenta) * 100;
    return totalGrosMargin;
  }

   CalculoPrecioVentaTable(): number {
    var total = 0;
    for (var count = 0; count < this.model.cotizaciones.length - 1; count++) {
      total += this.model.cotizaciones[count].resultadoPrecioVenta;
    }
    return total;
  }

}
