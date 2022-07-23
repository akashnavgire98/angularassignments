import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-displayform',
  templateUrl: './displayform.component.html',
  styleUrls: ['./displayform.component.css']
})
export class DisplayformComponent implements OnInit {
  
  frmClient:any;
  constructor() { }

  ngOnInit(): void {
    this.frmClient= new FormGroup(
    {
      contactid : new FormControl(""),
      contactName : new FormControl(""),
      address : new FormControl(""),
      pincode : new FormControl(""),
    }
    )
  }

  onSubmit(clientForm: any)
  {
   
    console.log(clientForm);
  }
  
}
