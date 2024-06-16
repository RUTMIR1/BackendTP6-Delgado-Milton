export class Transaccion {
    monedaOrigen:string;
    monedaDestino:string;
    cantidadOrigen:number;
    cantidadDestino:number;
    emailCliente:string;
    tasaConversion:number;

    constructor(monedaOrigen?:string, monedaDestino?:string, cantidadOrigen?:number, cantidadDestino?:number, emailCliente?:string, tasaConversion?:number){
        this.monedaOrigen = monedaOrigen ?? "";
        this.monedaDestino = monedaDestino ?? "";
        this.cantidadOrigen = cantidadOrigen ?? 0;
        this.cantidadDestino = cantidadDestino ?? 0;
        this.emailCliente = emailCliente ?? "";
        this.tasaConversion = tasaConversion ?? 0;        
    }
}
