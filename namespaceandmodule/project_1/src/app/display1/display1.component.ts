import { Component, OnInit } from '@angular/core';
import {Contacts} from '../service.service';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  contact1:any="";
//  data2:string="";
//  data3:string="";
//  data4:string="";
  constructor() { }

  ngOnInit(): void {
    const data1 = new Contacts.AddNewContact();
      // const AddContact=data1.display1();
      // console.log(AddContact);
      this.contact1=data1.display1();
    

    const data2 = new Contacts.EditContact();
    data2.display2();

    const data3 = new Contacts.DeleteContact();
    data3.display3();

    const data4 = new Contacts.ListContact();
    data4.display4();
  }

}
