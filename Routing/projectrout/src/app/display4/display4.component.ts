import { Component, OnInit } from '@angular/core';
import {Data3Service} from '../data3.service';

@Component({
  selector: 'app-display4',
  templateUrl: './display4.component.html',
  styleUrls: ['./display4.component.css']
})
export class Display4Component implements OnInit {
  Result:string="";
  constructor(private data3 : Data3Service) { }

  ngOnInit(): void {
  }

 onChangeHandler()
 {
  this.Result = this.data3.MessageNotify();
 }
}
