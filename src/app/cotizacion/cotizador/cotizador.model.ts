export class CotizacionModel
{
    supuestos:CotizacionSupuesto;
    parametros:CotizacionParametro;
    facturacion:any;    
}

export class CotizacionSupuesto{

}

export class CotizacionParametro{
    sueldoBruto:number;
    costoLaboral:number;

    constructor(){
        this.sueldoBruto=0;
        this.costoLaboral=0;
    }

    resultado():number{
        return this.sueldoBruto * this.costoLaboral;
    }


}