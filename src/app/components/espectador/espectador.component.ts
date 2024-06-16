import { Component } from '@angular/core';
import { EspectadorService } from '../../services/espectador.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espectador',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './espectador.component.html',
  styleUrl: './espectador.component.css'
})
export class EspectadorComponent {

  espectadores:any;
  id:string = "";
  constructor(private router:Router,private espectadorService:EspectadorService) {
    this.obtenerEspectadores();
   }

  obtenerEspectadores():void{
    this.espectadorService.getEspectadores().subscribe(
      (response)=>{
        this.espectadores = response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  obtenerEspectadorById(id:string):void{
    this.espectadores = [];
    this.espectadorService.getEspectadorBYId(id).subscribe(
      (response)=>{
        this.espectadores.push(response);
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  agregarEspectador():void{
    this.router.navigate(['espectadorForm']);
  }
}
