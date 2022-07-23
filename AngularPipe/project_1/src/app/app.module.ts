import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Display1Component } from './display1/display1.component';

import { UserstatusPipe } from './userstatus.pipe';
import { UserpageComponent } from './userpage/userpage.component';
import { Display2Component } from './display2/display2.component';

@NgModule({
  declarations: [
    AppComponent,
    Display1Component,
    UserstatusPipe,
    UserpageComponent,
    Display2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
