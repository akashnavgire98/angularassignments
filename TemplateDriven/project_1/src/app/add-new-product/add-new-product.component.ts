import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {
@Output() EventProductUpdate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }
 onSubmit(frmProduct:any)
 {
  this.EventProductUpdate.emit(frmProduct.value);
 }
}
