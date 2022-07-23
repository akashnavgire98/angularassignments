import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
 empData:any;
 empData2:any=[];
 selectEmpid:number=0;
 
  constructor() { }

  ngOnInit(): void {
    this.empData = [
      {eid:1, ename:'akash', salary:50000},
      {eid:2, ename:'abhay', salary:60000},
      {eid:3, ename:'viraj', salary:70000},
      {eid:4, ename:'nikhil', salary:80000},
      {eid:5, ename:'pratik', salary:90000},
    ]
  }

  onSelect(selectedid:any)
  {
    this.empData2.push(selectedid);
  }

}
