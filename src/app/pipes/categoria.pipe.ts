import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria',
  standalone: true
})
export class CategoriaPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value == 'l'){
      return 'local';
    }
    return 'extranjero';
  }

}
