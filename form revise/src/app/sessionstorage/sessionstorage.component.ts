import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sessionstorage',
  templateUrl: './sessionstorage.component.html',
  styleUrls: ['./sessionstorage.component.css']
})
export class SessionstorageComponent implements OnInit {
  Product:string='Dell Laptop';
  constructor() { }

  ngOnInit(): void {
  }

  onsetValue()
  {
    sessionStorage.setItem('productkey',this.Product);
  }

  onReadValue()
  {
   const Productkey = sessionStorage.getItem('productkey');
    console.log(Productkey);
  }
}
