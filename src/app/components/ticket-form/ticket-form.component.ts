import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { Ticket } from '../../models/ticket';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EspectadorService } from '../../services/espectador.service';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css'
})
export class TicketFormComponent {

  ticket:any;
  accion:string = 'new';
  espectadores:any;
  esp:string = "";
  aviso = false;
  validEspectador:boolean = true;
  constructor(private espectadorService:EspectadorService,private router:Router,private activatedRouter:ActivatedRoute, private ticketService: TicketService){
    this.obtenerEspectadores();
  }

  ngOnInit(): void {
    this.activatedRouter.params.subscribe( params =>{
      if(params['id'] == null){
        this.ticket = new Ticket();
        this.ticket.fechaCompra = new Date().toString();
        this.aviso = true;
      }else{
        console.log(params['id']);
        this.cargarTicket(params['id']);
        this.accion = 'edit';
      }
    })
  }
  accionFormulario():void{
    if(this.accion == 'new'){
      console.log(this.ticket);
      console.log(this.ticket.espectador);
      this.ticketService.createTicket(this.ticket).subscribe(
        (response)=>{
          console.log(response);
          this.router.navigate(['ticket']);
        },
        (error)=>{  
          console.log(error);
        }
      )
    }else{
      this.ticketService.updateTicket(this.ticket).subscribe(
        (response)=>{
          console.log(response);
          this.router.navigate(['ticket']);
        },
        (error)=>{  
          console.log(error);
        }
      )
    }
  }
  cargarTicket(id:string):void{
    this.ticketService.getTicket(id).subscribe(
      (response)=>{
        this.ticket = response;
        console.log(response);
        this.aviso = true;
      },
      (error)=>{
        console.log(error);
      }
    )
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
    )
  }

  asignarValorEspectador():void{
    this.espectadorService.getEspectadorBYId(this.esp).subscribe(
      (response)=>{
        this.ticket.espectador = response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  validarEspectador(ticket:Ticket):void{
    if(ticket.espectador.dni == 0){
      this.validEspectador = true;
    }
    this.validEspectador = false;
  }
}
