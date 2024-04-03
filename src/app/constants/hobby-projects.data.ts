import { PanelData } from '../models';

export const HOBBY_PROJECTS_DATA: PanelData[] = [
  {
    title: 'Angular Challenges',
    description: 'Februar 2024',
    content: 'Mitwirkung an einem OpenSource Projekt, hier habe ich unter anderem eine eigene Challenge erstellt.',
    links: [
      { href: 'https://github.com/tomalaforge/angular-challenges', label: 'GitHub' },
      { href: 'https://angular-challenges.vercel.app/', label: 'Live' },
      {
        href: 'https://github.com/tomalaforge/angular-challenges/pulls?q=is%3Apr+author%3Asvenson95+',
        label: 'Meine Pull Requests'
      },
      {
        href: 'https://angular-challenges.vercel.app/challenges/angular/46-simple-animations/',
        label: 'Challenge Simple Animations'
      }
    ],
    images: [{ src: 'assets/hobby-projects/challenge-simple-animations.png', label: 'Image 1' }]
  },
  {
    title: 'ng-xmp<wbr />-animations',
    description: 'September 2021 - Dezember 2021',
    content: "Tutorial App mit Beispiel-Implementierungen von Angular's integrierter Animations-Library.",
    links: [
      { href: 'https://github.com/svenson95/ng-xmp-animations', label: 'GitHub' },
      { href: 'https://svenson95.github.io/ng-xmp-animations', label: 'Live-Preview' }
    ]
  },
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
