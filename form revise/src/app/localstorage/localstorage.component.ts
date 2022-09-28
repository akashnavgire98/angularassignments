import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.css']
})
export class LocalstorageComponent implements OnInit {
  UserID:string='';
  UserPassword:string='';
  constructor() { }

  ngOnInit(): void {
  }

  onLocalStorageset(){
    this.UserID="Admin 2";
    this.UserPassword="Pwd 2";

    localStorage.setItem("loginid", this.UserID);
    localStorage.setItem('password', this.UserPassword);
  }

  onLocalStorageReading()
  {
    const LSUserid = localStorage.getItem('loginid');
    const LSPassword= localStorage.getItem('password');
    console.log(LSUserid, LSPassword)
  }

  onLocalStorageClear()
  {
    localStorage.clear();
  }

  onRemoveItem()
  {
    localStorage.removeItem('loginid');
  }

}
