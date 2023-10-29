import { Component } from '@angular/core';

import { viewerOptions } from 'src/app/constants/viewer-options';

@Component({
  selector: 'section#hobby-projects',
  templateUrl: './hobby-projects.component.html'
})
export class HobbyProjectsComponent {
  public options = viewerOptions;

  public projects = [
    {
      title: 'Fachentwickler',
      description: 'April 2020 - Heute',
      content:
        'Home-Schooling Plattform für die Berufsschule, Unterrichtszusammenfassungen, Quizze, Karteikarten & "Matching"-Puzzle-Minigame. Dashboard mit Fortschrittsanzeige, Anzeige der letzten Ankündigung aus dem Schul-Newsarchiv, anstehende Klausuren, Stundenplan und Lektionen der aktuellen Schulwoche.',
      links: [
        { href: null, label: 'GitHub' },
        { href: 'https://github.com/svenson95/fachentwickler-app', label: 'Frontend' },
        { href: 'https://github.com/svenson95/fachentwickler-api', label: 'Backend' }
      ],
      images: [
        { src: 'assets/hobby-projects/fachentwickler-1.png', alt: 'Image 1' },
        { src: 'assets/hobby-projects/fachentwickler-2.png', alt: 'Image 2' },
        { src: 'assets/hobby-projects/fachentwickler-3.png', alt: 'Image 3' },
        { src: 'assets/hobby-projects/fachentwickler-4.png', alt: 'Image 4' },
        { src: 'assets/hobby-projects/fachentwickler-5.png', alt: 'Image 5' },
        { src: 'assets/hobby-projects/fachentwickler-6.png', alt: 'Image 6' },
        { src: 'assets/hobby-projects/fachentwickler-7.png', alt: 'Image 7' }
      ]
    },
    {
      title: 'ng-xmp<wbr />-animations',
      description: 'September 2021 - Dezember 2021',
      content:
        "Tutorial App mit Beispiel-Implementierungen von Angular's integriertem Animations-System.",
      links: [
        { href: 'https://github.com/svenson95/ng-xmp-animations', label: 'GitHub' },
        { href: 'https://svenson95.github.io/ng-xmp-animations', label: 'Live-Preview' }
      ]
    },
    {
      title: 'Yahtzee Minigame',
      description: 'September 2021',
      content: 'Kleines Würfelspiel welches ich während einer Bewerbungsphase als Arbeitsprobe entwickeln sollte.',
      links: [
        { href: 'https://github.com/svenson95/yahtzee-app', label: 'GitHub' },
        { href: 'https://codesandbox.io/s/github/svenson95/yahtzee-app', label: 'CodeSandbox' }
      ]
    },
    {
      title: 'Angular documentation extension',
      description: 'July 2022',
      content: 'Eigene Dokumentation für Angular.',
      links: [
        { href: 'https://github.com/svenson95/ng-neer-app', label: 'GitHub' },
        { href: 'http://ng-neer.io/', label: 'Live' }
      ]
    }
  ];
}
