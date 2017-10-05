import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserStateTransferModule } from '@ngx-universal/state-transfer';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    BrowserModule.withServerTransition({appId: 'cli-universal'}),
    BrowserAnimationsModule,
    BrowserStateTransferModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppBrowserModule { }
