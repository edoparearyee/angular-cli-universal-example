import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';


@NgModule({
  imports: [
    AppModule,
    BrowserModule.withServerTransition({appId: 'cli-universal'}),
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    // Server worker breaks SSR so removing for <ScrollView>
    // https://github.com/angular/angular/issues/20890
    // environment.production ?
    //   ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  bootstrap: [AppComponent],
})
export class AppBrowserModule { }
