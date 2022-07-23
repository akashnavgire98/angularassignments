import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {
frmEmployee:any;
  constructor() { }

  ngOnInit(): void {
    this.frmEmployee = new FormGroup({
      clientid: new FormControl("", [Validators.required, Validators.minLength(6)]),
      clientname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      clientaddress : new FormControl("", Validators.required),
      clientnumber : new FormControl("", [Validators.required, Validators.pattern('^[0-9]+$')] )
    })
  }

  onSubmit()
  {
    console.log("Submitted", this.frmEmployee.status);
  }
}
