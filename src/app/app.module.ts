import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "./header/header.component";
import {SellerAuthComponent} from "./seller-auth/seller-auth.component";
import {AppRoutingModule} from "./app.routes";



@NgModule({
  declarations: [
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
