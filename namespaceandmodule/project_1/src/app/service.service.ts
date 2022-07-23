import { Injectable } from '@angular/core';



export namespace Contacts{

  @Injectable({
    providedIn: 'root'
  })
  export class AddNewContact {
  
    constructor() { }
    display1():string{
      console.log('New Contact Added');
      return "New Contact Added";
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class EditContact {
  
    constructor() { }
    display2(){
      console.log('Contact Updated')
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteContact {
  
    constructor() { }
    display3(){
      console.log('Contact Deleted')
    }
  }

  @Injectable({
    providedIn: 'root'
  })
  export class ListContact {
  
    constructor() { }
    display4(){
      console.log('Contact List')
    }
  }


}


