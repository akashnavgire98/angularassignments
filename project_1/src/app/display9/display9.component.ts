import { Component, OnInit } from '@angular/core';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-display9',
  templateUrl: './display9.component.html',
  styleUrls: ['./display9.component.css']
})
export class Display9Component implements OnInit {
// PayType :Payment = Payment.None;
colorType : color = color.None;
  constructor() { }

  ngOnInit(): void {
  }

  // onPayment(PayNo:any)
  // {
  //   if(PayNo===1){
  //     this.PayType = Payment.Cash;
  //   }
  //   else if(PayNo === 2){
  //     this.PayType = Payment.Cheque;
  //   }
  //   else if(PayNo === 3){
  //     this.PayType = Payment.Transfer;
  //   }
  //   else{
  //     this.PayType = Payment.None;
  //   }
  // }

  oncolor (colorNo:any)
  {
    if(colorNo===1){
          this.colorType = color.Red;
        }
        else if(colorNo === 2){
          this.colorType = color.Green;
        }
        else if(colorNo === 3){
          this.colorType = color.Blue;
        }
        else{
          this.colorType = color.Black;
        }
  }

}

// enum Payment {
//   None = "None",
//   Cash = "Cash Payment",
//   Cheque = "Cheque Payment",
//   Transfer = "Online Transfer"
// }


enum color {
  None= "None",
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
  Black = "Black"
}