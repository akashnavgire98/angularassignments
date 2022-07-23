import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  userfrm:any;
  constructor(private formbuilder : FormBuilder) { }

  ngOnInit(): void {
    this.userfrm = this.formbuilder.group(
      {
        username : '',
        roles : this.formbuilder.array([])
      }
    )
  }
  get roles(): FormArray {
    return this.userfrm.get('roles') as FormArray
  }

  newRoles(): FormGroup{
    return this.formbuilder.group(
      {
        role : '',
        exp : ''
      }
    )
  }

  AddRole()
  {
    this.roles.push(this.newRoles());
  }

  removerole(i:number)
  {
    this.roles.removeAt(i);
  }

  onSubmit()
  {
    console.log(this.userfrm.value)
  }

}
