import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  productData:any=[
    {productid:"1", productcompany:"Dell", productname:"Dell Inspiron 3511"},
    {productid:"2", productcompany:"HP", productname:"HP Pavillion X360"},
    {productid:"3", productcompany:"Sony", productname:"Sony VAIO"},
    {productid:"4", productcompany:"IBM", productname:"IBM Thinkpad"},
    {productid:"5", productcompany:"HCL", productname:" HCL 1095"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
