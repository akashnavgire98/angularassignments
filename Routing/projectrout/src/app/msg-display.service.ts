import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MsgDisplayService {

  constructor(private data1 : LoggerService) { }

  displaymsg()
  {
    console.log(this.data1.logdata());
    return this.data1.logdata();
  }
}
