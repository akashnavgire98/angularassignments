import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display8',
  templateUrl: './display8.component.html',
  styleUrls: ['./display8.component.css']
})
export class Display8Component implements OnInit {
Paytype:Payment = Payment.Transfer;
  constructor() { }

  ngOnInit(): void {
    console.log(this.Paytype);
    this.Paytype = Payment.Cheque;
    console.log(this.Paytype);
  }

}
enum Payment{
  Cash = 'Cash Payment',
  Cheque = 'Cheque Payment',
  Transfer = 'Online Transfer'
}