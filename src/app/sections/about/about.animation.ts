import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

export const staggerAnimation = trigger('staggerAnimation', [
  transition('* => *', [
    query('#personal-data-item', style({ opacity: 0 })),
    query(
      '#personal-data-item',
      stagger('100ms', [
        animate(
          '300ms 200ms',
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
