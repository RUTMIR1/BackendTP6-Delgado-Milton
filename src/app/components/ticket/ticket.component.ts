import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../services/ticket.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategoriaPipe } from '../../pipes/categoria.pipe';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [CommonModule, FormsModule, CategoriaPipe],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  tickets:any;
  categoria:string = "";
  constructor(private router:Router, private ticketService:TicketService){
    this.obtenerTickets();
  }

  obtenerTickets():void{
    this.ticketService.getTickets().subscribe(
      (response)=>{
        this.tickets = response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  obtenerTicketsByCategoria(categoria:string):void{
    this.ticketService.getTicketByCategoria(categoria).subscribe(
      (response)=>{
        this.tickets = response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  agregarTicket():void{
    this.router.navigate(['ticketForm']);
  }

  modificarTicket(id:string):void{
    this.router.navigate(['ticketForm',id]);
  }

  eliminarTicket(id:string):void{
    this.ticketService.deleteTicket(id).subscribe(
      (response)=>{
        console.log(response);
        this.obtenerTickets();
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
