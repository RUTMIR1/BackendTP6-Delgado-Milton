import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './producto-form.component.html',
  styleUrl: './producto-form.component.css'
})
export class ProductoFormComponent {

  accion:string;
  producto:Producto = new Producto();
  id:string;

  constructor( private router:Router ,private activatedRoute:ActivatedRoute, private productoService:ProductoService){
    this.accion = "Nuevo";
    this.id = "";
  }

  ngOnInit():void{
    this.activatedRoute.params.subscribe(params =>{
      if(params['id'] == null){
        this.accion = "Nuevo";
        this.producto = new Producto();
        console.log(this.accion);
      }else{
        this.accion = "Actualizar";
        this.cargarProducto(params['id']);
        this.id = params['id'];
        console.log(this.accion);
      }
    });
  }

  accionFormulario():void{
    if(this.accion == "Nuevo"){
      this.productoService.createProducto(this.producto).subscribe(
        (response)=>{
          console.log(response);
        },
        (error)=>{
          console.log(error);
        }
      );
    }else{
      this.productoService.updateProducto(this.id,this.producto).subscribe(
        (response)=>{
          console.log(response);
        },
        (error)=>{
          console.log(error);
        }
      );
    }
    this.router.navigate(['producto']);    
  }

  cargarProducto(id:string):void{
    this.productoService.getProducto(id).subscribe(
      (response)=>{
        this.producto = response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
