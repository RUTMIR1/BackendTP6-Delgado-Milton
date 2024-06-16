import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'destacado',
  standalone: true
})
export class DestacadoPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    if(value){
      return "Destacado";
    }
    return "No destacado";
  }
}
