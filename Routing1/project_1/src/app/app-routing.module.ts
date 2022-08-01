import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './category/product/product.component';
import { SalesComponent } from './sales/sales.component';
const routes: Routes = [
  {path:"display1", component:DashboardComponent},
  {path:"category", component:CategoryComponent,
    children:[{path:'product/:productid/:productname', component:ProductComponent}]},
  {path:"display3", component:SalesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
