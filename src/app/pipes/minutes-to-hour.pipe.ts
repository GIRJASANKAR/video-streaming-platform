import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToHour'
})
export class MinutesToHourPipe implements PipeTransform {

  transform(minutes: number, ...args: unknown[]): unknown {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const hourString = hours > 0 ? `${hours}h` : '';
    const minuteString = remainingMinutes > 0 ? `${remainingMinutes}min` : '';
    return `${hourString} ${minuteString}`;
  }

}
