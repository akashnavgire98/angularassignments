import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  constructor() { }
  showNotification(MessageText:any)
  {
    return MessageText;
  }
}
