import { Component, OnInit } from '@angular/core';
import {MsgDisplayService} from '../msg-display.service';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  Result:string="";
  constructor(private data2 : MsgDisplayService) { }

  ngOnInit(): void {
    this.Result = this.data2.displaymsg();
  }

}
