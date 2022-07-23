import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userstatus'
})
export class UserstatusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value==='A'){
      return 'Active';
    }
    else if(value==="D"){
      return 'Disabled';
    }
    else{
      return 'Enter Valid Value';
    }
  }

}
