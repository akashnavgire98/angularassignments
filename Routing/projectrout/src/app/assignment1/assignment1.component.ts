import { Component, OnInit } from '@angular/core';
import {Data4Service} from '../data4.service';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  
  constructor(private data : Data4Service) { }

  ngOnInit(): void {

   const Result : string = this.data.showMsg();
   console.log(Result);
    
  }
  

}
