import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-userchild',
  templateUrl: './userchild.component.html',
  styleUrls: ['./userchild.component.css']
})
export class UserchildComponent implements OnInit {
@Input('PropUser') userData:any;
  constructor() { }

  ngOnInit(): void {
  }

}
