import { Injectable } from '@angular/core';
import {Data5Service} from './data5.service';

@Injectable({
  providedIn: 'root'
})
export class Data4Service {

  constructor(private data5 : Data5Service) { }

  showMsg():string
  {
   const Result= this.data5.displayMessage();
   return Result;
  }
}
