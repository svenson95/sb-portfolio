import { trigger, transition, query, style, stagger, animate, keyframes } from "@angular/animations";

export const staggerAnimation = trigger('staggerAnimation', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 }), { optional: true }),
    query(
      ':enter',
      stagger('100ms', [
        animate(
          '300ms ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateX(-20px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(10px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
          ])
        )
      ])
    )
  ])
]);