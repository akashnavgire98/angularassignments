import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment2Component,
    Assignment1Component,
    ChildcomponentComponent
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
