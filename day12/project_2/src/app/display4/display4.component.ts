import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display4',
  templateUrl: './display4.component.html',
  styleUrls: ['./display4.component.css']
})
export class Display4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.Display();
  }

  Display(){
    let Amount :(string | number);
    Amount = 'Rs 500';
    console.log('Amount :', Amount);
    Amount = 600;
    console.log('Amount :', Amount);

  }
}
