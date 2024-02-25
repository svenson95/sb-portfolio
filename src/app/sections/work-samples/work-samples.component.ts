import { Component } from '@angular/core';

const PROJECTS_DATA = [
  {
    title: 'Survey-App',
    description: 'März 2019 - Dezember 2019',
    content:
      'Single-Page-Application entwickelt mit Angular und Angular Material, Anwendung zum durchführen von Umfragen.',
    images: [
      { src: 'assets/work-examples/vilua-survey/vilua-survey-1.png', alt: 'Image 1' },
      { src: 'assets/work-examples/vilua-survey/vilua-survey-2.png', alt: 'Image 2' },
      { src: 'assets/work-examples/vilua-survey/vilua-survey-3.png', alt: 'Image 3' }
    ]
  },
  {
    title: 'Lernetics',
    description: 'Oktober 2020 - Dezember 2020',
    content:
      'Neuentwicklung einer Cross-Plattform-App mit Tab-basiertem Layout. „Mit Lernletics kannst du dich im Rahmen deiner Ausbildung in verschiedenen Themenbereichen selbst trainieren.“',
    images: [{ src: 'assets/work-examples/lernetics/lernetics-1.png', alt: 'Image 1' }]
  },
  {
    title: 'VapeWatchers',
    description: 'Januar 2020 - Juni 2021',
    content:
      'Neuentwicklung einer Ionic & React Control-Panel-App, für Nutzer von E-Zigaretten mit Informationen zu Inhaltsstoffen und Rauchverhalten - Nikotin Konsum pro Tag/Woche, verwendete Cartridges & Nutzungshistorie. Benutzer-Authentifizierung über AWS-Amplify.',
    images: [
      { src: 'assets/work-examples/smart-vaping/smart-vaping-1.png', alt: 'Image 1' },
      { src: 'assets/work-examples/smart-vaping/smart-vaping-2.png', alt: 'Image 2' },
      { src: 'assets/work-examples/smart-vaping/smart-vaping-3.png', alt: 'Image 3' }
    ]
  },
  {
    title: 'Pio Office Suite',
    description: 'August 2020 - September 2021',
    content:
      'Neuentwicklung einer Progressive-Web-App mit Ionic & Angular, ein Kontaktbuch mit der Möglichkeit, Anrufe über Durchwahlnummern zu initialisieren mithilfe einer zusätzlichen VoIP-App „easybell“.',
    images: [{ src: 'assets/work-examples/pos/pos-1.png', alt: 'Image 1' }]
  },
  {
    title: 'Cost-of-Production',
    description: 'April 2021 - November 2021',
    content:
      'Online-Plattform gebaut mit <a target="blank" rel="noopener noreferrer" href="https://themeforest.net/item/vien-angular-admin-template/25817698">Vien-Angular-Admin-Template</a>. zur Erfassung von Produktionskosten in der Landwirtschaft - Farm-Statistiken, Fragebögen & Reports.',
    images: [{ src: 'assets/work-examples/cop/cop-1.png', alt: 'Image 1' }]
  }
];

@Component({
  selector: 'section#work-samples',
  templateUrl: './work-samples.component.html'
})
export class WorkSamplesComponent {
  public readonly projects = PROJECTS_DATA;
}
