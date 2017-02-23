import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HttpComponent } from './http.component';
import {HttpService} from "./http.service";

@NgModule({
  declarations: [
    HttpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [HttpComponent]
})
export class AppModule { }
