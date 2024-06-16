import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaccion } from '../models/transaccion';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  constructor(private _http:HttpClient) { }

  getTransacciones():Observable<any>{
    let httpOptions = {}
    return this._http.get("http://localhost:3000/api/transaccion/", httpOptions);
  }

  createTransaccion(transaccion:Transaccion):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(transaccion);

    return this._http.post("http://localhost:3000/api/transaccion/",body,httpOptions);
  }

  deleteTransaccion(id:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.delete("http://localhost:3000/api/transaccion/"+id,httpOptions);
  }

  getByEmailTransaccion(email:string):Observable<any>{
    let httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this._http.get("http://localhost:3000/api/transaccion/"+email, httpOptions);
  }
  getByDivisasTransaccion(origen:string,destino:string):Observable<any>{
    let httpOptions = {}
    return this._http.get('http://localhost:3000/api/transaccion/'+origen+'/'+destino,httpOptions);
  }
  getCodigoMonedas():Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '2adacde742mshb91705ba8250040p1a909fjsneb46cf04ed84',
	    	'x-rapidapi-host': 'currency-converter18.p.rapidapi.com'
      })
    }
    return this._http.get('https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies', httpOptions);
  }
  getTasa(from:string, to:string):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': '2adacde742mshb91705ba8250040p1a909fjsneb46cf04ed84',
		    'x-rapidapi-host': 'currency-converter241.p.rapidapi.com'
      })
    }
    return this._http.get('https://currency-converter241.p.rapidapi.com/conversion_rate?from='+from+'&to='+to,httpOptions);
  }
}
