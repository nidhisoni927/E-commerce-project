import { NgModule } from '@angular/core';

import {AppComponent} from "../app.component";
import {HeaderComponent} from "../header/header.component";
import {HomeComponent} from "../home/home.component";
import {SellerAuthComponent} from "../seller-auth/seller-auth.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app.routes";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent
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
