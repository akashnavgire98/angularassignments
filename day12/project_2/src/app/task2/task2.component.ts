import { Component, OnInit } from '@angular/core';

interface Contact {
  contactname:string,
  contactaddress:string,
  phonenumber:number,
  areacode:string,
  society:string,
}

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  Details:any;
  constructor() { }

  ngOnInit(): void {
    
  }
  Display(){
    let arrContact:Contact = {contactname:'Akash navgire', contactaddress:'351/52 kasba peth ', phonenumber:3564879, areacode:'4110114', society:'H No 351'};
    this.Details = arrContact;                   
}

}