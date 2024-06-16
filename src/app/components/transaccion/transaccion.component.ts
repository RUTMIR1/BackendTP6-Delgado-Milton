import { Component } from '@angular/core';
import { TransaccionService } from '../../services/transaccion.service';
import { Transaccion } from '../../models/transaccion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaccion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './transaccion.component.html',
  styleUrl: './transaccion.component.css'
})
export class TransaccionComponent {

  transacciones:Array<Transaccion> = new Array<Transaccion>();
  correo:string = "buscar";
  origen:string = "buscar";
  destino:string = "buscar";
  constructor(private router:Router, private transaccionService: TransaccionService){
    this.obtenerTransacciones();
  }

  obtenerTransacciones():void{
    this.transaccionService.getTransacciones().subscribe(
      (response)=>{
        this.transacciones = new Array<Transaccion>();
        let vtransaccion:Transaccion = new Transaccion();
        response.forEach((element:any)=>{
          Object.assign(vtransaccion, element);
          this.transacciones.push(vtransaccion);
          vtransaccion = new Transaccion();
        });
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  obtenerTransaccionesPorCorreo(email:string):void{
    this.transaccionService.getByEmailTransaccion(email).subscribe(
      (response)=>{
        this.transacciones = new Array<Transaccion>();
        let vtransaccion:Transaccion = new Transaccion();
        response.forEach((element:any)=>{
          Object.assign(vtransaccion, element);
          this.transacciones.push(vtransaccion);
          vtransaccion = new Transaccion();
        });
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  obtenerTransaccionesPorMonedas():void{
    this.transaccionService.getByDivisasTransaccion(this.origen,this.destino).subscribe(
      (response)=>{
        this.transacciones = new Array<Transaccion>();
        let vtransaccion:Transaccion = new Transaccion();
        response.forEach((element:any)=>{
          Object.assign(vtransaccion, element);
          this.transacciones.push(vtransaccion);
          vtransaccion = new Transaccion();
        });
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  eliminarTransaccion(id:string):void{
    this.transaccionService.deleteTransaccion(id).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      } 
    )
  }
  agregarTransaccion():void{
    this.router.navigate(['transaccionForm']);
  }
}
