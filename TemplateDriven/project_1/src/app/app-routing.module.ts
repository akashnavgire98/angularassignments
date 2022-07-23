import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment1Component } from './assignment1/assignment1.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserlistComponent } from './userlist/userlist.component';
const routes: Routes = [
  {path:'display1', component:Assignment1Component},
  {path:'display2', component:ProductlistComponent},
  {path:'display3', component:UserlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
