import {Component, NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";


import {AppRoutingModule} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: []
  ,
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
