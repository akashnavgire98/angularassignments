import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  uservalue:any=[];
  userempid:number=0;
  constructor() { }

  ngOnInit(): void {
    this.uservalue = [
      {userid:1, username:"akash", status:"Active", role:"Admin"},
      {userid:2, username:"abhay", status:"Disabled", role:"Manager"},
      {userid:3, username:"viraj", status:"Active", role:"User"},
      {userid:4, username:"nikhil", status:"Disabled", role:"User2"},
      {userid:5, username:"om", status:"Active", role:"Admin2"},
      {userid:6, username:"aditya", status:"Disabled", role:"User2"},
    ]
  }
  onDetails(selecteduserid:number)
  {
    this.userempid = selecteduserid; 
  }
} 
