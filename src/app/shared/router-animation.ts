import { trigger, transition, style, animate, state, query, group } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition(':enter', []),
  transition('homePage => aboutPage', [
    group([
      query(':enter', style({transform: 'translateX(100vw)', zIndex: 1}), {optional: true}),
      query(':leave', [
        style({transform: 'translateX(0)', zIndex: 2}),
        animate('.5s ease-in-out', style({transform: 'translateX(-100vw)'})),
        style({ display: 'none' })
      ], {optional: true}),
      query(':enter', animate('.5s ease-in-out', style({transform: 'translateX(0)'})), {optional: true})
    ])
  ]),
  transition('aboutPage => homePage', [
    group([
      query(':enter', style({transform: 'translateX(-100vw)', zIndex: 2}), {optional: true}),
      query(':leave', [
        style({ transform: 'translateX(0)', zIndex: 1}),
        animate('.5s ease-in-out', style({transform: 'translateX(100vw)'})),
        style({ display: 'none' })
      ], {optional: true}),
      query(':enter', animate('.5s ease-in-out', style({transform: 'translateX(0)'})), {optional: true})
    ])
  ])
]);
