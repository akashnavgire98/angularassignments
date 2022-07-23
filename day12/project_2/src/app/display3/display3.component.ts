import { Component, OnInit } from '@angular/core';

interface IEmployee {
  empname:string,
  designation:string,
  salary:number,
  active:boolean
}

@Component({
  selector: 'app-display3',
  templateUrl: './display3.component.html',
  styleUrls: ['./display3.component.css']
})
export class Display3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Display();
  }

  Display(){
    let arrEmp:IEmployee = {empname:'Akash navgire', designation:'full stack developer', salary:125000, active:true};
    console.log(arrEmp);
    // arrEmp.company = 'abc pvt Ltd';
    // console.log(arrEmp);
  }
}
