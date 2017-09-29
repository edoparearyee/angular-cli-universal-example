import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule, routedComponents, resolveProviders } from './about-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  providers: [...resolveProviders],
  declarations: [...routedComponents]
})
export class AboutModule { }
