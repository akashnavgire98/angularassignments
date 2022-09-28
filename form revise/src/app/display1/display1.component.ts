import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  templateUrl: './display1.component.html',
  styleUrls: ['./display1.component.css']
})
export class Display1Component implements OnInit {
  UsingLocalStorage:any='';
  UsingSessionStorage:any='';
  constructor() { }

  ngOnInit(): void {
    this.UsingLocalStorage = localStorage.getItem('localStorage user id');
    this.UsingSessionStorage = sessionStorage.getItem('sessionStorage user id');
  }

}
