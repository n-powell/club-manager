import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model';

@Pipe({
  name: 'sortBySalary',
  pure: false
})
export class SortBySalaryPipe implements PipeTransform {

  transform(input: Player[], salary) {
    const output: Player[] = [];
    if (salary === 'cheap') {
      for (let i = 0; i < input.length; i++) {
        if (input[i].salary <= 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (salary === 'expensive') {
        for (let i = 0; i < input.length; i++) {
          if (input[i].salary > 10000) {
            output.push(input[i]);
          }
      }
        return output;
    } else {
      return input;
    }
  }
 }
