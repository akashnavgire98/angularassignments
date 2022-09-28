import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Display1Component } from './display1/display1.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { SessionstorageComponent } from './sessionstorage/sessionstorage.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  {path:'display1', component:Display1Component},
  {path:'localstorage', component:LocalstorageComponent},
  {path:'sessionstorage', component:SessionstorageComponent},
  {path:'form', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
