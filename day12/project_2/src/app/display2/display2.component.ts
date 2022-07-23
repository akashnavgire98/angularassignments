import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Display2();
  }
  Display2(){
    console.log("Display2")
    // const arrEmployee = {empname:'akash navgire', age:24, phone:12334567};
    // console.log(arrEmployee);

    const arrEmployee:EmployeeModel = {"empname":'akash navgire', "age":24, "phone":1456789};
    console.log(arrEmployee);
}

}


class EmployeeModel {
  "empname":string;
  "age":number;
  "phone":number
}

