import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parentcomponent',
  templateUrl: './parentcomponent.component.html',
  styleUrls: ['./parentcomponent.component.css']
})
export class ParentcomponentComponent implements OnInit {
  nameDisplay:string="";
  nameDisplayValue:string="";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.nameDisplayValue = this.nameDisplay;
  }

}
