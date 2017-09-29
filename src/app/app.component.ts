import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { routeAnimation } from './shared/router-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimation]
})
export class AppComponent {

  public prepRouteState(outlet: RouterOutlet): string {
    return outlet.activatedRouteData['animation'] || '';
  }

}
