import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  color1:boolean=false;
  color2:boolean=false;
  color3:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  oncolor1Change()
  {
    this.color1 = !this.color1;
  }
  oncolor2Change()
  {
    this.color2 = !this.color2;
  }
  oncolor3Change()
  {
    this.color3 = !this.color3;
  }
  // oncolor (colorNo:any)
  // {
  //   if(colorNo===1){
  //         this.colorType = color.Red;
  //       }
  //       else if(colorNo === 2){
  //         this.colorType = color.Green;
  //       }
  //       else if(colorNo === 3){
  //         this.colorType = color.Blue;
  //       }
  //       else{
  //         this.colorType = color.Black;
  //       }


  }


