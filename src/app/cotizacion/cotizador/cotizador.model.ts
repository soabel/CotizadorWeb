export class CotizacionModel {
    supuestos: CotizacionSupuesto;
    parametros: CotizacionParametro;
    facturacion: CotizacionFacturacion;
    cotizaciones: CotizacionTable[] = [];

}


export class CotizacionSupuesto {
    responsable: string;
    duracion: number;
    plazoPago: string;
    cliente: string;
    descripcion: string;

    constructor() {
        this.responsable = '';
        this.duracion = 0;
        this.plazoPago = '';
        this.cliente = '';
        this.descripcion = '';
    }
}

export class CotizacionParametro {
    sueldoBruto: number;
    costoLaboral: number;
    movilidadMes: number;
    hardwareSoftwareMes: number;
    overHead: number;

    constructor() {
        this.sueldoBruto = 0;
        this.costoLaboral = 0;
        this.movilidadMes = 0;
        this.hardwareSoftwareMes = 0;
        this.overHead = 0;
    }

    resultado(): number {
        return this.sueldoBruto * this.costoLaboral;
    }
}

export class CotizacionFacturacion {
    grossMargin: number;
    precioVenta: number;
    costoTotal: number;

    constructor() {
        this.grossMargin = 0;
        this.precioVenta = 0;
        this.costoTotal = 0;
    }

    resultadoGrossMargin(): number {
        if (this.precioVenta == 0)
            return 0;
        return ((this.precioVenta - this.costoTotal) / this.precioVenta) * 100;
    }
}

export class CotizacionTable {
    id: number;
    tipoGanancia: string;
    descripcionServicio: string;
    sueldoBrutoMensual: number;
    duracion: number;
    resultadoGrossMargin: number = 0;
    resultadoPrecioVenta: number;
    costoTotal: number = 0;
    costoTotalSum:number=0;

    constructor() {
        this.tipoGanancia = '';
        this.descripcionServicio = '';
        this.sueldoBrutoMensual = 0;
        this.duracion = 0;
        this.resultadoGrossMargin = 0;
        this.resultadoPrecioVenta =0;
        this.costoTotal =0;
        this.costoTotalSum=0;
    }

}