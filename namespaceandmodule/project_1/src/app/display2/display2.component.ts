import { Component, OnInit } from '@angular/core';
import {Data1Service} from '../employees/data1.service';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  Result:string="";
  constructor(private data1 : Data1Service) { }

  ngOnInit(): void {
    this.Result= this.data1.DisplayUser();
    console.log(this.Result);
  }

}
