import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { Display2Component } from './display2/display2.component';
import { ParentcomponentComponent } from './parentcomponent/parentcomponent.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './child2/child2.component';
import { DisplayformComponent } from './displayform/displayform.component';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    Display2Component,
    ParentcomponentComponent,
    ChildcomponentComponent,
    Parent2Component,
    Child2Component,
    DisplayformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
