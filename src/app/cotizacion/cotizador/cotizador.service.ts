import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, RequestOptions } from '@angular/http';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { CotizacionService } from "app/cotizacion/cotizador/cotizador.model";



export class CotizacionServiceUtil {

    private apiUrl = 'http://comercialapiservice.azurewebsites.net/api/Cotizaciones';

    constructor(private http: Http) { }

    ingresarPropuesta(request: CotizacionService): Promise<CotizacionService> {
        console.log(request);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiUrl, request, options).toPromise()
            .then(this.extractData)
            .catch(this.handleErrorPromise);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
    private handleErrorObservable(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
    private handleErrorPromise(error: Response | any) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }
}