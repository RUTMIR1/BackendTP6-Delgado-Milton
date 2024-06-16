import { Component } from '@angular/core';
import { EspectadorService } from '../../services/espectador.service';
import { Espectador } from '../../models/espectador';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-espectador-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './espectador-form.component.html',
  styleUrl: './espectador-form.component.css'
})
export class EspectadorFormComponent {

  espectador:Espectador = new Espectador();
  constructor(private router:Router,private espectadorService: EspectadorService){
  }

  guardarEspectador():void{
    this.espectadorService.createEspectador(this.espectador).subscribe(
      (response)=>{
        console.log(response);
        this.router.navigate(['espectador']);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
