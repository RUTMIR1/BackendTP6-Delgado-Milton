import { Component } from '@angular/core';
import { TransaccionService } from '../../services/transaccion.service';
import { Router } from '@angular/router';
import { Transaccion } from '../../models/transaccion';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaccion-form',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './transaccion-form.component.html',
  styleUrl: './transaccion-form.component.css'
})
export class TransaccionFormComponent {

  codigos:any;
  tasas:any;
  transaccion:Transaccion = new Transaccion();
  constructor(private router:Router, private transaccionService:TransaccionService){
    this.transaccion.monedaOrigen = "USD";
    this.transaccion.monedaDestino = "ARS";
    //this.obtenerCodigosMoneda();
    //this.calcularTasa();
  }

  accionFormulario():void{
    this.transaccionService.createTransaccion(this.transaccion).subscribe(
      (response)=>{
        this.router.navigate(['transaccion']);
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  obtenerCodigosMoneda():void{
    this.transaccionService.getCodigoMonedas().subscribe(
      (response)=>{
        this.codigos = response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  obtenerTasas():void{
    this.transaccionService.getTasa(this.transaccion.monedaOrigen,this.transaccion.monedaDestino).subscribe(
      (response)=>{
        this.transaccion.tasaConversion = response.to.rate;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  calcularCantidadDestino():void{
    this.transaccion.cantidadDestino = this.transaccion.cantidadOrigen * this.transaccion.tasaConversion;
    console.log(this.transaccion.cantidadDestino);
  }

  calcularTasa():void{
    if(this.transaccion.monedaOrigen!= "" && this.transaccion.monedaDestino != ""){
      this.obtenerTasas();   
    }
  }
}
