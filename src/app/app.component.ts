import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FooterComponent, HeaderComponent } from './components';
import { ScrollManagerDirective, ScrollSectionDirective } from './directives';
import { AboutComponent, CvComponent, HobbyProjectsComponent, SkillsComponent, WorkSamplesComponent } from './sections';

@Component({
  selector: 'sb-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    WorkSamplesComponent,
    HobbyProjectsComponent,
    CvComponent,
    FooterComponent,
    ScrollSectionDirective
  ],
  providers: [ScrollManagerDirective],
  styles: `
    header { @apply flex items-center justify-between h-16 sticky top-0 z-10 px-4 sm:p-5; }
    main { @apply flex flex-col mx-0 md:mx-5 my-7 gap-7 xl:mx-auto; }
    section:first-of-type { @apply flex-col gap-5 justify-center; }
    footer { @apply flex w-full; }
  `,
  template: `
    <header></header>
    <main>
      <section id="about" sbScrollSection="about"></section>
      <section id="skills" sbScrollSection="skills"></section>
      <section id="hobby-projects" sbScrollSection="hobby-projects"></section>
      <section id="work-samples" sbScrollSection="work-samples"></section>
      <section id="cv" sbScrollSection="cv"></section>
    </main>
    <footer></footer>
  `
})
export class AppComponent {}
