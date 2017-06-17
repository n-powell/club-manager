import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './player.model'

@Pipe({
  name: 'SalarySort',
  pure: false
})
export class SalarySortPipe implements PipeTransform {

  transform(input: Player[], salary){
    var output: Player[] = [];
    if(salary === "cheap") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].salary <= 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (salary === "expensive") {
        for (var i = 0; i < input.length; i++) {
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
