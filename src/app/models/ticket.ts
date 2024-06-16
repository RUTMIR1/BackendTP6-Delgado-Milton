import { Espectador } from "./espectador";

export class Ticket {
    precioTicket:number;
    categoriaEspectador:string;
    fechaCompra:string;
    espectador:Espectador;

    constructor(precioTicket?:number, categoriaEspectador?:string, fechaCompra?:string, espectador?:Espectador){
        this.precioTicket = precioTicket ?? 0;
        this.categoriaEspectador = categoriaEspectador ?? '';
        this.fechaCompra = fechaCompra ?? '';
        this.espectador = espectador ?? new Espectador();
    }

}
