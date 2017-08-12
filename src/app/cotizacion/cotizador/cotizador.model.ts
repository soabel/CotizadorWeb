export class CotizacionModel {
    supuestos: CotizacionSupuesto;
    parametros: CotizacionParametro;
    facturacion: CotizacionFacturacion;
    cotizaciones: CotizacionTable[] = [];
    cotizacionService: CotizacionService;

}


export class CotizacionSupuesto {
    responsable: string;
    duracion: number;
    plazoPago: string;
    cliente: string;
    descripcion: string;
    email: string;


    constructor() {
        this.responsable = '';
        this.duracion = 0;
        this.plazoPago = '';
        this.cliente = '';
        this.descripcion = '';
        this.email = '';

    }
}

export class CotizacionParametro {
    sueldoBruto: number;
    costoLaboral: number;
    movilidadMes: number;
    hardwareSoftwareMes: number;
    overHead: number;
    factorCL: number;
    hrsxmes: number;
    constructor() {
        this.sueldoBruto = 0;
        this.costoLaboral = 0;
        this.movilidadMes = 0;
        this.hardwareSoftwareMes = 0;
        this.overHead = 0;
        this.factorCL = 0;
        this.hrsxmes = 0;
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
    costoLaboral: number = 0;
    costoTotalSum: number = 0;
    movildiad: number = 0;
    overHead: number = 0;
    costoTotal: number = 0;
    grossMarginTag: string = 'false';

    constructor() {
        this.tipoGanancia = '';
        this.descripcionServicio = '';
        this.sueldoBrutoMensual = 0;
        this.duracion = 0;
        this.resultadoGrossMargin = 0;
        this.resultadoPrecioVenta = 0;
        this.costoLaboral = 0;
        this.costoTotalSum = 0;
        this.movildiad = 0;
        this.overHead = 0;
        this.costoTotal = 0;
        this.grossMarginTag = 'true';
    }

}

export class CotizacionService {
    idCotizacion: number;
    idResponsable: number;
    responsable: string;
    duracion: number;
    plazoPago: number;
    cliente: string;
    costoLaboral: number;
    movilidad: number;
    hardwareSoftware: number;
    overhead: number;
    costoTotal: number;
    precioVentaTotal: number;
    idEstado: number;
    eliminado: boolean;
    cotizacionDetalles: DetalleCotizacion[];

    constructor() {
        this.idCotizacion = 0;
        this.idResponsable = 0;
        this.responsable = '';
        this.duracion = 0;
        this.plazoPago = 0;
        this.cliente = '';
        this.costoLaboral = 0;
        this.movilidad = 0;
        this.hardwareSoftware = 0;
        this.overhead = 0;
        this.costoTotal = 0;
        this.precioVentaTotal = 0;
        this.idEstado = 0;
        this.eliminado = false;
        this.cotizacionDetalles = null;
    }
}

export class DetalleCotizacion {

    idCotizacionDetalle: number;
    idTipoGanancia: number;
    descripcionServicio: string;
    sueldoBrutoMensual: number;
    tiempoHorasMes: number;
    costo: number;
    grossMargin: number;
    precioVenta: number;
    eliminado: boolean;
    idCotizacion: number;
    cotizacion: {}
}