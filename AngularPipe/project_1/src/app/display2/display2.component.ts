import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display2',
  templateUrl: './display2.component.html',
  styleUrls: ['./display2.component.css']
})
export class Display2Component implements OnInit {

  arrAdminDetails : any = [
    {userid:1, username:'Admin', status:'A'},
    {userid:2, username:'Admin2', status:'A'},
    {userid:3, username:'Admin3', status:'D'},
    {userid:4, username:'Admin4', status:'A'},
    {userid:5, username:'Admin5', status:'D'},
    {userid:6, username:'Admin6', status:'A'},
    {userid:7, username:'Admin7', status:'D'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
