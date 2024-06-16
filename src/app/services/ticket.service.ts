import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private _http:HttpClient) { }

  getTickets():Observable<any>{
    let httpOptions = {};
    return this._http.get('http://localhost:3000/api/ticket',httpOptions);
  }
  createTicket(ticket:Ticket):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(ticket);
    return this._http.post('http://localhost:3000/api/ticket',body,httpOptions);
  }
  getTicketByCategoria(categoria:string):Observable<any>{
    let httpOptions = {};
    return this._http.get('http://localhost:3000/api/ticket/categoria/'+categoria,httpOptions);
  }
  deleteTicket(id:string):Observable<any>{
    let httpOptions = {};
    return this._http.delete('http://localhost:3000/api/ticket/'+id,httpOptions);
  }
  updateTicket(ticket:Ticket):Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    let body = JSON.stringify(ticket);
    return this._http.put('http://localhost:3000/api/ticket/',body,httpOptions);
  }

  getTicket(id:string):Observable<any>{
    let httpOptions = {};
    return this._http.get('http://localhost:3000/api/ticket/'+id,httpOptions);
  }
}
