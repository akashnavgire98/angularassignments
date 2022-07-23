import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data5Service {

  constructor() { }
  displayMessage():string
  {
    console.log('linked service is called');
    return 'linked service is called';
  }
}
