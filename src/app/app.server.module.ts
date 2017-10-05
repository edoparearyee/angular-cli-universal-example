import { NgModule, ApplicationRef, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { ServerStateTransferModule, StateTransferService } from '@ngx-universal/state-transfer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';

export function bootstrapFactory(appRef: ApplicationRef, stateTransfer: StateTransferService): () => Subscription {
  return () => appRef.isStable
    .filter(stable => stable)
    .first()
    .subscribe(() => {
      stateTransfer.inject();
    });
}

@NgModule({
  imports: [
    AppModule,
    BrowserModule.withServerTransition({appId: 'cli-universal'}),
    ServerModule,
    ServerStateTransferModule.forRoot(),
    ModuleMapLoaderModule,
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER,
      useFactory: bootstrapFactory,
      multi: true,
      deps: [
        ApplicationRef,
        StateTransferService,
      ]
    }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule { }
