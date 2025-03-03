import { animate, keyframes, query, stagger, style, transition, trigger } from '@angular/animations';

export const staggerAnimationOne = trigger('skillsStaggerOne', [
  transition(':enter', [
    query('.skill-image', style({ opacity: 0 })),
    query(
      '.skill-image',
      stagger('200ms', [
        animate(
          `300ms 300ms`,
          keyframes([
            style({ opacity: 0, transform: 'translateY(20px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(-10px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    )
  ])
]);

export const staggerAnimationTwo = trigger('skillsStaggerTwo', [
  transition(':enter', [
    query('.skill-image', style({ opacity: 0 })),
    query(
      '.skill-image',
      stagger('200ms', [
        animate(
          `300ms 600ms`,
          keyframes([
            style({ opacity: 0, transform: 'translateY(20px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(-10px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    )
  ])
]);

export const staggerAnimationThree = trigger('skillsStaggerThree', [
  transition(':enter', [
    query('.skill-image', style({ opacity: 0 })),
    query(
      '.skill-image',
      stagger('200ms', [
        animate(
          `250ms 900ms`,
          keyframes([
            style({ opacity: 0, transform: 'translateY(20px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(-10px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
          ])
        )
      ])
    )
  ])
]);
