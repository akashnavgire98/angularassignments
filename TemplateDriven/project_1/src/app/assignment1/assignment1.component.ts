import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  result:string='';
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(frmContact:any)
  {
    if(frmContact.status === 'VALID'){
      this.result='valid:contact form submitted'
    
    }
    else{
      this.result='invalid:contact form is invalid'
    }
  }
}
