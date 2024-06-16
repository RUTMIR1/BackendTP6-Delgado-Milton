import { Routes } from '@angular/router';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { TransaccionComponent } from './components/transaccion/transaccion.component';
import { TransaccionFormComponent } from './components/transaccion-form/transaccion-form.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { EspectadorComponent } from './components/espectador/espectador.component';
import { EspectadorFormComponent } from './components/espectador-form/espectador-form.component';
import { TicketFormComponent } from './components/ticket-form/ticket-form.component';
import { Punto1Component } from './components/punto1/punto1.component';

export const routes: Routes = [
    {path: 'producto', component: ProductoComponent},
    {path:'productoForm', component:ProductoFormComponent},
    {path:'productoForm/:id', component:ProductoFormComponent},
    {path: 'transaccion', component:TransaccionComponent},
    {path: 'transaccionForm', component:TransaccionFormComponent},
    {path: 'ticket', component:TicketComponent},
    {path: 'ticketForm', component:TicketFormComponent},
    {path: 'ticketForm/:id', component:TicketFormComponent},
    {path: 'espectador', component:EspectadorComponent},
    {path: 'espectadorForm', component:EspectadorFormComponent},
    {path: 'punto1', component:Punto1Component}
];
