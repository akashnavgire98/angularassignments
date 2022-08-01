import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  childPara:string="";
  paraProduct:string="";
  
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    //routing Parameters
    this.activatedRoute.params.subscribe((para:Params)=>{
      this.childPara = para['productid'];
      this.paraProduct =para['productname'];
    })

    // this.activatedRoute.queryParams.subscribe((qparams:Params)=>{
    //   this.categorynm = qparams['productname'];
    // })
  }

}
