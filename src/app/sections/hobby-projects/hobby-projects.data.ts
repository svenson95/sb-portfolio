import { PanelData } from '../../models';

export const HOBBY_PROJECTS_DATA: PanelData[] = [
  {
    title: 'reelscore',
    description: 'hobby-projects.reelscore.description',
    content: 'hobby-projects.reelscore.content',
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
    description: 'hobby-projects.angular-challenges.description',
    content: 'hobby-projects.angular-challenges.content',
    links: [
      { href: 'https://github.com/tomalaforge/angular-challenges', label: 'GitHub' },
      { href: 'https://angular-challenges.vercel.app/', label: 'Live' },
      {
        href: 'https://github.com/tomalaforge/angular-challenges/pulls?q=is%3Apr+author%3Asvenson95+',
        label: 'content.hobby-projects.angular-challenges.links.my-pull-requests'
      }
    ],
    images: [{ src: 'assets/hobby-projects/challenge-simple-animations.png', label: 'Image 1' }]
  },
  {
    title: 'ng-xmp<wbr />-animations',
    description: 'hobby-projects.ng-xmp-animations.description',
    content: 'hobby-projects.ng-xmp-animations.content',
    links: [
      { href: 'https://github.com/svenson95/ng-xmp-animations', label: 'GitHub' },
      { href: 'https://svenson95.github.io/ng-xmp-animations', label: 'Live-Preview' }
    ]
  },
  {
    title: 'Fachentwickler',
    description: 'hobby-projects.fachentwickler.description',
    content: 'hobby-projects.fachentwickler.content',
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
