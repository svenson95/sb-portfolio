import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

export const staggerAnimation = trigger('staggerAnimation', [
  transition('* => *', [
    query('.about-profile-item', style({ opacity: 0 })),
    query(
      '.about-profile-item',
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
