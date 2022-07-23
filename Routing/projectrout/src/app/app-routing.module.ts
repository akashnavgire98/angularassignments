import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
import { Display2Component } from './display2/display2.component';
import { Display3Component } from './display3/display3.component';
import { Display4Component } from './display4/display4.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { Assignment2Component } from './assignment2/assignment2.component';

const routes: Routes = [
  {path:'display1', component: Display1Component},
  {path:'display2', component: Display2Component},
  {path:'display3', component: Display3Component},
  {path:'disp4', component: Display4Component},
  {path:'assignment1', component: Assignment1Component},
  {path:'assignment2', component: Assignment2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
