import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'cli-universal'}),
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    BrowserTransferStateModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
