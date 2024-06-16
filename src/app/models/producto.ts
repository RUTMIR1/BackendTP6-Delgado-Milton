export class Producto {
    nombre: string;
    precio: number;
    descripcion: string;
    categoria: string;
    imagen: string;
    stock: number;
    destacado: boolean;

    constructor(nombre?:string, precio?:number, descripcion?:string, categoria?:string, imagen?:string,
        stock?:number, destacado?:boolean){
        this.nombre = nombre ?? "";
        this.precio = precio ?? 0;
        this.descripcion = descripcion ?? "";
        this.categoria = categoria ?? "";
        this.imagen = imagen ?? "";
        this.stock = stock ?? 0;
        this.destacado = destacado ?? false;
    }
}
