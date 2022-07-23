import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
Result:string="";
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(){
    return console.log( 'Child 2 Destroyed');
  }
}
