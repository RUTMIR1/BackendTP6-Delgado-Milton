import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Espectador } from '../models/espectador';

@Injectable({
  providedIn: 'root'
})
export class EspectadorService {

  constructor(private _http:HttpClient){ }

  getEspectadores():Observable<any>{
    let httpOptions = {}
    return this._http.get('http://localhost:3000/api/espectador',httpOptions);
  }

  createEspectador(espectador:Espectador):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body = JSON.stringify(espectador);
    return this._http.post('http://localhost:3000/api/espectador',body,httpOptions);
  }
  getEspectadorBYId(id:string):Observable<any>{
    let httpOptions = {}
    return this._http.get('http://localhost:3000/api/espectador/'+id,httpOptions);
  }
}
