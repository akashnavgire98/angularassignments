import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logdata(){
    console.log('admin loggged today at 11am');
    return 'Admin logged today at 11am';
    
  }
}
