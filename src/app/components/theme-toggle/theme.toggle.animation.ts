import { animate, style, transition, trigger } from '@angular/animations';

export const SunUpAndDownAnimation = trigger('sunUpAndDown', [
  transition('false => true', [
    style({ transform: 'translateY(-30px)', opacity: 0 }),
    animate('150ms ease-in', style({ transform: '*', opacity: 1 }))
  ]),
  transition('true => false', [
    style({ transform: 'translateY(30px)', opacity: 0 }),
    animate('150ms ease-out', style({ transform: '*', opacity: 1 }))
  ])
]);
