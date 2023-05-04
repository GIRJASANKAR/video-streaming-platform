import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
export class TranslatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 'en') {
      return 'English';
    } else if (value === 'hi') {
      return 'Hindi';
    }
    return value;
  }
}
