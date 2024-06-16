import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor( private _http:HttpClient){}

  getProductos():Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:3000/api/producto/",httpOption);
  }
  getProducto(id:string):Observable<any>{

    let httpOption ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get("http://localhost:3000/api/producto/"+id, httpOption);
  }
  updateProducto(id:string, producto:Producto):Observable<any>{
    let httpOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body:any = JSON.stringify(producto);
    return this._http.put("http://localhost:3000/api/producto/"+id,body,httpOption);
  }
  createProducto(producto:Producto):Observable<any>{
    let httpOption ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    let body:any = JSON.stringify(producto);
    return this._http.post("http://localhost:3000/api/producto/",body,httpOption);
  }

  deleteProducto(id:string):Observable<any>{
    let httpOption ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.delete("http://localhost:3000/api/producto/"+id,httpOption);
  }

  getDestacados():Observable<any>{
    let httpOption ={
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };
    return this._http.get("http://localhost:3000/api/producto/destacados",httpOption);
  }
}
