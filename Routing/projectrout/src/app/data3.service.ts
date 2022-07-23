import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data3Service {

  constructor() { }

  private privateFullName = 'This is my Private Modifier';

  MessageNotify(){
    return this.privateFullName;
  }
}
