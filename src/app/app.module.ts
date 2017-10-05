import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpTransferModule } from '@ngx-universal/state-transfer';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpTransferModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent,
    HttpModule
  ]
})
export class AppModule { }
