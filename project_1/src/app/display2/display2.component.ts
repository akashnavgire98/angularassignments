import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {
  showText:boolean=true;
  hideText:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
