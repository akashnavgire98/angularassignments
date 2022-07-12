import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display6',
  templateUrl: './display6.component.html',
  styleUrls: ['./display6.component.css']
})
export class Display6Component implements OnInit {
  arrEmployees : any = [
    {empid:1,empname:'akash navgire', designation:"Full stack Developer"},
    {empid:2,empname:'abhay rathod', designation:"Full stack Developer"},
    {empid:3,empname:'pratik redekar', designation:"Full stack Developer"},
    {empid:4,empname:'viraj kate', designation:"Web Developer"}
]
  constructor() { }

  ngOnInit(): void {
    this.arrEmployees.forEach((item:any) => {
      console.log(item)
    });
  }

}
