import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { CardHeaderComponent } from '../../components/card-header/card-header.component';
import { BypassUrlPipe } from '../../pipes/bypass-url.pipe';
import { LinkComponent } from '../../components/link/link.component';
import { socials } from '../../constants/socials';


import { staggerAnimation } from './about.animation';
const ABOUT_DATA = [
  { key: '2008', value: 'In der Oberschule hatten wir einen Computer-Kurs, wo wir mit <sb-link url="https://scratch.mit.edu/" inNewTab>Scratch</sb-link> gearbeitet haben, so bin ich das erste mal mit dem Thema Programmierung in Berührung gekommen.' },
  { key: '2009', value: 'Mit <sb-link url="https://developer.valvesoftware.com/wiki/SDK_Docs" inNewTab>Source SDK</sb-link> "Maps" für ein Computer Spiel entwickelt.' },
  { key: '2010', value: 'Das erste mal mit Webentwicklung und insbesondere mit WordPress beschäftigt, eine kleine Website gebaut und einige Funktionen ausprobiert, Plugins installiert, am Styling Kleinigkeiten geändert.' },
  { key: '2016', value: 'Die erste kleine WordPress Page über Strato gehostet, für einen kleinen Handwerks Betrieb, mit etwas Text, Kontaktdaten, Referenzen in Form von Fotos und Beschreibungen.' },
  { key: '2018', value: 'Den Entschluss getroffen, Programmieren zu lernen, angefangen mit einem Kurs auf Udemy über das Thema iOS Entwicklung mit <sb-link url="https://www.apple.com/de/swift/" inNewTab>Swift</sb-link>.' },
  { key: '2019', value: 'Vollzeit-Praktikum in einer Agentur für Web- & App-Entwicklung begonnen - vorbereitend zur Ausbildung zum Fachinformatiker für Anwendungsentwicklung.' },
  { key: '2022', value: 'Mein Start als Junior Frontend-Entwickler.' },
];

const PROFILE_DATA = [
  { key: 'Name', value: 'Sven Brodny' },
  { key: 'Geburtsdatum', value: '02.11.1995' },
  { key: 'Sprachen', value: 'Deutsch (C2) / Englisch (B2)' },
  { key: 'Geburtsort', value: 'Hamburg' },
  { key: 'Aufgewachsen in', value: 'Berlin' },
  { key: 'Wohnort', value: 'Magdeburg' },
];

@Component({
  selector: 'section#about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    CardHeaderComponent,
    BypassUrlPipe,
    MatButtonModule,
    LinkComponent
  ],
  animations: [staggerAnimation]
})
export class AboutComponent {
  public readonly socials = socials;
  public readonly about = ABOUT_DATA;
  public readonly profile = PROFILE_DATA;
}
