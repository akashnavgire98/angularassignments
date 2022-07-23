import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Assignment1Component } from './assignment1/assignment1.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserchildComponent } from './userchild/userchild.component';

@NgModule({
  declarations: [
    AppComponent,
    Assignment1Component,
    ProductlistComponent,
    AddNewProductComponent,
    UserlistComponent,
    UserchildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
