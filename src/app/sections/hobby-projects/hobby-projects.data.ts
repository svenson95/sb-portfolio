import { PanelData } from '../../models';

export const HOBBY_PROJECTS_DATA: PanelData[] = [
  {
    title: 'reelscore',
    description: 'March 2024 - now',
    content:
      'Fußball Livescore Anwendung, mit meiner selbst entwickelten Erweiterung einer "Performance"-Form, abgeleitet von den Schüssen, Torschüssen und erzielte Tore eines Teams. Wenn bspw. nur 3 mal im ganzen Spiel aufs gegnerische Tor geschossen wurde und das Spiel nur 1:0 gewonnen wurde, war die Performance mittelmäßig. In anderen Livescore Anwendungen wird nur die "Ergebnis"-Form angezeigt, abgeleitet vom Spielausgang für das jeweilige Spiel. Die Daten dafür werden von der RapidAPI <a target="blank" rel="noopener noreferrer" href="https://rapidapi.com/api-sports/api/api-football">API-FOOTBALL</a> geladen, dafür habe ich mir eine zusätzliche Anwendung erstellt, womit ich die Daten laden und in meiner MongoDB-Datenbank speichern kann. Aktuell werden keine neue Daten mehr geladen, um die Anwendung zu testen, zum Datum 18.05.2024 springen, dort sind Spiele vorhanden.',
    links: [
      { href: 'https://github.com/svenson95/reelscore', label: 'GitHub' },
      { href: 'https://reelscore.vercel.app/', label: 'Live' }
    ],
    images: [
      { src: 'assets/hobby-projects/reelscore-1.png', label: 'Image 1' },
      { src: 'assets/hobby-projects/reelscore-2.png', label: 'Image 2' },
      { src: 'assets/hobby-projects/reelscore-3.png', label: 'Image 3' },
      { src: 'assets/hobby-projects/reelscore-4.png', label: 'Image 4' }
    ]
  },
  {
    title: 'Angular Challenges',
    description: 'Februar 2024',
    content:
      'Durch einen <a target="blank" rel="noopener noreferrer" href="https://blog.angular.io/introducing-angular-v17-4d7033312e4b">Blogeintrag</a>, in welchem die Version 17 von Angular vorgestellt wurde, bin ich auf dieses Projekt gestoßen. Hier habe ich selbst Challenges gelöst, einige von diesen Challenges auch erweitert und angepasst, kleinere Styling Anpassungen in der Anwendung vogenommen und eigene Challenges erstellt - <a target="blank" rel="noopener noreferrer" href="https://angular-challenges.vercel.app/challenges/angular/46-simple-animations/">Simple Animations</a> & <a target="blank" rel="noopener noreferrer" href="https://angular-challenges.vercel.app/challenges/typescript/47-enums-vs-union-types/">Enums vs Union Types</a>.',
    links: [
      { href: 'https://github.com/tomalaforge/angular-challenges', label: 'GitHub' },
      { href: 'https://angular-challenges.vercel.app/', label: 'Live' },
      {
        href: 'https://github.com/tomalaforge/angular-challenges/pulls?q=is%3Apr+author%3Asvenson95+',
        label: 'Meine Pull Requests'
      }
    ],
    images: [{ src: 'assets/hobby-projects/challenge-simple-animations.png', label: 'Image 1' }]
  },
  {
    title: 'ng-xmp<wbr />-animations',
    description: 'September 2021',
    content: "Tutorial App mit Beispiel-Implementierungen von Angular's integrierter Animations-Library.",
    links: [
      { href: 'https://github.com/svenson95/ng-xmp-animations', label: 'GitHub' },
      { href: 'https://svenson95.github.io/ng-xmp-animations', label: 'Live-Preview' }
    ]
  },
  {
    title: 'Fachentwickler',
    description: 'April 2020 - Juli 2022',
    content:
      'Home-Schooling Plattform für die Berufsschule, Unterrichtszusammenfassungen, Quizze, Karteikarten & "Matching"-Puzzle-Minigame. Dashboard mit Fortschrittsanzeige, Anzeige der letzten Ankündigung aus dem Schul-Newsarchiv, anstehende Klausuren, Stundenplan und Lektionen der aktuellen Schulwoche.',
    links: [
      { href: null, label: 'GitHub' },
      { href: 'https://github.com/svenson95/fachentwickler-app', label: 'Frontend' },
      { href: 'https://github.com/svenson95/fachentwickler-api', label: 'Backend' }
    ],
    images: [
      { src: 'assets/hobby-projects/fachentwickler-1.png', label: 'Image 1' },
      { src: 'assets/hobby-projects/fachentwickler-2.png', label: 'Image 2' },
      { src: 'assets/hobby-projects/fachentwickler-3.png', label: 'Image 3' },
      { src: 'assets/hobby-projects/fachentwickler-4.png', label: 'Image 4' },
      { src: 'assets/hobby-projects/fachentwickler-5.png', label: 'Image 5' },
      { src: 'assets/hobby-projects/fachentwickler-6.png', label: 'Image 6' },
      { src: 'assets/hobby-projects/fachentwickler-7.png', label: 'Image 7' }
    ]
  }
];
