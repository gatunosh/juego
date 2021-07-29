import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'juego'
})
export class JuegoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
