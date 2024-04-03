import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FooterComponent, HeaderComponent } from './components';
import { BypassUrlPipe } from './pipes';
import { AboutComponent, CvComponent, HobbyProjectsComponent, SkillsComponent, WorkSamplesComponent } from './sections';
import { ScrollService } from './shared';

@Component({
  selector: 'sb-root',
  template: `
    <header class="flex items-center justify-between h-16 sticky top-0 z-10 px-4 sm:p-5"></header>
    <main class="flex flex-col mx-0 md:mx-5 my-7 gap-7 xl:mx-auto">
      <section id="about" class="flex-col gap-5 justify-center"></section>
      @defer (on viewport) {
      <section id="skills"></section>
      <section id="hobby-projects"></section>
      <section id="work-samples"></section>
      <section id="cv"></section>
      } @placeholder {
      <p>loading ...</p>
      }
    </main>
    <footer class="flex w-full"></footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    HeaderComponent,
    AboutComponent,
    SkillsComponent,
    WorkSamplesComponent,
    HobbyProjectsComponent,
    CvComponent,
    FooterComponent
  ],
  providers: [BypassUrlPipe]
})
export class AppComponent {
  constructor(private readonly scroll: ScrollService) {
    this.scroll.initialize();
  }
}
