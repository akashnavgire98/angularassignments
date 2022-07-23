import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { Parent2Component } from './parent2/parent2.component';
import { DisplayformComponent } from './displayform/displayform.component';

const routes: Routes = [
  {path:'display1', component:Display1Component},
  {path:'parentcomponent', component:ParentcomponentComponent},
  {path:'parent2', component:Parent2Component},
  {path:'displayform', component:DisplayformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
