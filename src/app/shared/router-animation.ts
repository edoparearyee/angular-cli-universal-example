import { trigger, transition, style, animate, state, query, group } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* => aboutPage', [
    query(':enter',
      style({position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateX(100%)'}), {optional: true}
    ),
    group([
      query(':leave', [
        style({transform: 'translateX(0)'}),
        animate('1s ease-out', style({transform: 'translateX(-100%)'})),
        style({ display: 'none' })
      ], {optional: true}),
      query(':enter', animate('1s ease-out', style({transform: 'translateX(0)'})), {optional: true})
    ])
  ]),
  transition('* => homePage', [
    query(':enter',
      style({position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateX(-100%)'}), {optional: true}
    ),
    group([
      query(':leave', [
        style({ transform: 'translateX(0)'}),
        animate('1s ease-out', style({transform: 'translateX(100%)'})),
        style({ display: 'none' })
      ], {optional: true}),
      query(':enter', animate('1s ease-out', style({transform: 'translateX(0)'})), {optional: true})
    ])
  ])
]);
