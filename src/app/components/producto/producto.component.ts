import { Component } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DestacadoPipe } from '../../pipes/destacado.pipe';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [FormsModule,CommonModule,DestacadoPipe],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {
  productos:any;
  productosFilter:any;
  filtro:string = 'todos';
  
  constructor(private router:Router ,private productoService:ProductoService){
    this.obtenerProductos();
  }

  obtenerProductos():void{
    this.productoService.getProductos().subscribe(
      (response)=>{
        this.productos = response;
        this.productosFilter = this.productos;
        this.filtro = "todos";
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  agregarProducto():void{
    this.router.navigate(['productoForm']);
  }

  modificarProducto(id:string):void{
    this.router.navigate(['productoForm',id]);
  }

  eliminarProducto(id:string):void{
    this.productoService.deleteProducto(id).subscribe(
      (response)=>{
        this.obtenerProductos();
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  obtenerDestacados():void{
    this.productoService.getDestacados().subscribe(
      (response)=>{
        this.productos = response;
        this.productosFilter = this.productos;
        this.filtro = "todos";
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  filtrarPorCategoria():void{
    this.productosFilter = [];
    if(this.filtro == 'todos'){
      this.productosFilter = this.productos;
    }else{
      if(this.filtro == 'gaming'){
        for(let e of this.productos){
          if(e.categoria == 'gaming'){
            this.productosFilter.push(e);
          }
        }
      }else{
        if(this.filtro == 'accesorio'){
          for(let e of this.productos){
            if(e.categoria == 'accesorio'){
              this.productosFilter.push(e);
            }
          }
        }else{
          for(let e of this.productos){
            if(e.categoria == 'hardware'){
              this.productosFilter.push(e);
            }
          }
        }
      }
    }
  }
}
