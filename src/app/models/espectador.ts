export class Espectador {
    nombre:string;
    apellido:string;
    dni:number;
    email:string;

    constructor(nombre?:string,apellido?:string,dni?:number,email?:string){
        this.nombre = nombre ?? "";
        this.apellido = apellido ?? "";
        this.dni = dni ?? 0;
        this.email = email ?? "";
    }
}
