import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostResolver } from './about-resolve.service';
import { AboutComponent } from './about.component';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    data: { animation: 'aboutPage' },
    resolve: { posts: PostResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule { }

export const routedComponents = [AboutComponent];
export const resolveProviders = [PostResolver];
