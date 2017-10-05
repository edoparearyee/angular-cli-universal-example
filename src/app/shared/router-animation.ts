import { trigger, transition, style, animate, query, group, stagger } from '@angular/animations';

export const routeAnimation = trigger('routeAnimation', [
  transition('* => aboutPage', [

    group([
      query(':leave',
        style({position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateX(0)', zIndex: 2}),
        {optional: true}
      ),

      query(':enter', [
        style({transform: 'translateX(100%)'})
      ], {optional: true}),

      query(':enter .router-animate-child', [
        style({transform: 'translateY(75px)', opacity: 0})
      ], {optional: true})
    ]),

    query(':leave .router-animate-child', stagger('100ms', [
      animate('350ms ease-out', style({transform: 'translateY(75px)', opacity: 0}))
    ]), {optional: true}),

    style({height: '!'}),

    group([
      query(':leave', [
        style({transform: 'translateX(0)'}),
        animate('1s ease-out', style({transform: 'translateX(-100%)'})),
        style({ display: 'none' })
      ], {optional: true}),

      query(':enter', [
        animate('1s ease-out', style({transform: 'translateX(0)'}))
      ], {optional: true}),

    ]),

    query(':enter .router-animate-child', stagger(200, [
      animate('500ms ease-out', style({transform: 'translateY(0)', opacity: 1}))
    ]), {optional: true})

  ]),


  transition('* => homePage', [

    group([
      query(':leave',
        style({position: 'absolute', top: 0, left: 0, right: 0, transform: 'translateX(0)', zIndex: 2}),
        {optional: true}
      ),

      query(':enter .router-animate-child', [
        style({transform: 'translateY(75px)', opacity: 0})
      ], {optional: true})
    ]),

    query(':leave .router-animate-child', stagger('100ms', [
      animate('350ms ease-out', style({transform: 'translateY(75px)', opacity: 0}))
    ]), {optional: true}),

    style({height: '!'}),

    group([
      query(':leave', [
        style({transform: 'translateX(0)'}),
        animate('1s ease-out', style({transform: 'translateX(100%)'})),
        style({ display: 'none' })
      ], {optional: true}),

      query(':enter', [
        animate('1s ease-out', style({transform: 'translateX(0)'}))
      ], {optional: true}),

    ]),

    query(':enter .router-animate-child', stagger(200, [
      animate('500ms ease-out', style({transform: 'translateY(0)', opacity: 1}))
    ]), {optional: true})

  ])
]);
