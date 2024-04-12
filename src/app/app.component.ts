import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { FooterComponent, HeaderComponent } from './components';
import { ScrollManagerDirective, ScrollSectionDirective } from './directives';
import { BypassUrlPipe } from './pipes';
import { AboutComponent, CvComponent, HobbyProjectsComponent, SkillsComponent, WorkSamplesComponent } from './sections';
import { ScrollService } from './shared';

@Component({
  selector: 'sb-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
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
  providers: [BypassUrlPipe, ScrollManagerDirective],
  template: `
    <header class="flex items-center justify-between h-16 sticky top-0 z-10 px-4 sm:p-5"></header>
    <main class="flex flex-col mx-0 md:mx-5 my-7 gap-7 xl:mx-auto">
      <section id="about" class="flex-col gap-5 justify-center" sbScrollSection="about"></section>
      @defer (on viewport) {
      <section id="skills" sbScrollSection="skills"></section>
      <section id="hobby-projects" sbScrollSection="hobby-projects"></section>
      <section id="work-samples" sbScrollSection="work-samples"></section>
      <section id="cv" sbScrollSection="cv"></section>
      } @placeholder {
      <p>loading ...</p>
      }
    </main>
    <footer class="flex w-full"></footer>
  `
})
export class AppComponent {
  private readonly scroll = inject(ScrollService);

  constructor() {
    this.scroll.initialize();
  }
}
