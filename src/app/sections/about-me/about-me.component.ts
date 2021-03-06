import { trigger, transition, query, style, stagger, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'section#about',
  templateUrl: './about-me.component.html',
  animations: [
    trigger('staggerAnimation', [
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
    ])
  ]
})
export class AboutMeComponent {
  public data = [
    { key: 'Name', value: 'Sven Brodny' },
    { key: 'Geburtsdatum', value: '02.11.1995' },
    {
      key: 'E-Mail',
      value: '<a href="mailto:svenbrodny@googlemail.com">svenbrodny@googlemail.com</a>'
    },
    {
      key: 'Sprachen',
      value: 'Deutsch (C2) / Englisch (B2)'
    },
    { key: 'Geburtsort', value: 'Hamburg' },
    { key: 'Wohnort', value: 'Berlin' }
  ];
}
