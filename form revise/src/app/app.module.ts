import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';
import { LocalstorageComponent } from './localstorage/localstorage.component';
import { SessionstorageComponent } from './sessionstorage/sessionstorage.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    LocalstorageComponent,
    SessionstorageComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
