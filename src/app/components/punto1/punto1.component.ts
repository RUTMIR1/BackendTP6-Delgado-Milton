import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

declare var bootstrap: any;
declare var $: any;

@Component({
  selector: 'app-punto1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements AfterViewInit {
  productos: Array<Producto> = [];
  destacados: Array<any> = [];

  constructor(private productoService: ProductoService, private router: Router) {
    this.obtenerProductos();
    this.obtenerProductoDestacado();
  }

  obtenerProductos(): void {
    this.productoService.getProductos().subscribe(
      (response) => {
        this.productos = response;
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  obtenerProductoDestacado(): void {
    this.productoService.getDestacados().subscribe(
      (response) => {
        this.destacados = response;
        console.log(this.destacados);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  administrarProducto(): void {
    this.router.navigate(['producto']);
  }

  ngAfterViewInit(): void {
    this.iniciarCarousel();
  }

  iniciarCarousel(): void {
    setTimeout(() => {
      const multipleCardCarousel = document.querySelector("#carouselExampleControls") as HTMLElement | null;
      if (multipleCardCarousel && window.matchMedia("(min-width: 768px)").matches) {
        const carousel = new bootstrap.Carousel(multipleCardCarousel, {
          interval: false,
        });

        const carouselInner = document.querySelector(".carousel-inner") as HTMLElement;
        const carouselItems = document.querySelectorAll(".carousel-item") as NodeListOf<HTMLElement>;

        if (carouselInner && carouselItems.length > 0) {
          const carouselWidth = carouselInner.scrollWidth;
          const cardWidth = carouselItems[0].offsetWidth;
          let scrollPosition = 0;

          document.querySelector("#carouselExampleControls .carousel-control-next")?.addEventListener("click", () => {
            if (scrollPosition < carouselWidth - cardWidth * 4) {
              scrollPosition += cardWidth;
              $(carouselInner).animate({ scrollLeft: scrollPosition }, 600);
            }
          });

          document.querySelector("#carouselExampleControls .carousel-control-prev")?.addEventListener("click", () => {
            if (scrollPosition > 0) {
              scrollPosition -= cardWidth;
              $(carouselInner).animate({ scrollLeft: scrollPosition }, 600);
            }
          });
        }
      } else if (multipleCardCarousel) {
        multipleCardCarousel.classList.add("slide");
      }
    }, 1000); // Retardo para asegurarse de que los datos hayan sido cargados
  }
}