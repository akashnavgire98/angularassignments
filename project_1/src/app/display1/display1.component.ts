import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
//Explicit Type
// TitleText:string="Angular Learning";
// Amount:number=12345;
// Status:boolean=true;

//Implicit Type
// TitleText1:any="Angular Learning";
// TitleText2="Angular Learning";
// Amount1:any="123456789";
// Status1:any=true;

ContactID : number = 123;
ContactName : string = "akash navgire";
company : string = "Abc 123 Pvt Ltd ";
DueAmount : number = 123455666;
Phone : any = 91-12345555688;
Area : any = "South Zone"
  constructor() { }

  ngOnInit(): void {
  }

}
