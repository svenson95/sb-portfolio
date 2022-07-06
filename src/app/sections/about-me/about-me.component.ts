import { Component } from '@angular/core';

@Component({
  selector: 'section#about',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
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
