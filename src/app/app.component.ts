import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { FooterComponent, HeaderComponent } from './components';
import { ScrollManagerDirective, ScrollSectionDirective } from './directives';
import { AppLanguage } from './models';
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
    ScrollSectionDirective,
    TranslateModule
  ],
  providers: [ScrollManagerDirective],
  styles: `
    @use "src/styles/constants";
    @use 'sass:map';

    :host {
      @apply flex flex-col;

      main,
      footer .wrapper {
        max-width: 1200px;
      }

      header { @apply flex items-center justify-between h-16 sticky top-0 z-10 px-4 sm:p-5; }
      main { @apply flex flex-col mx-0 md:mx-5 my-7 gap-7 xl:mx-auto; }
      section:first-of-type { @apply flex-col gap-5 justify-center; }
      main > section {
        @apply flex items-center;
        min-height: calc(100vh - 64px);

        ::ng-deep .card {
          @apply w-full p-4;

          @screen sm {
            @apply p-6;
          }
        }
      }
      footer { @apply flex w-full; }

      @screen md {
        main > section ::ng-deep .card {
          border-left: 1px solid constants.$border-color;
        }
      }
    }
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
export class AppComponent {
  #translate = inject(TranslateService);

  constructor() {
    const availableLangs: AppLanguage[] = ['de', 'en'];
    const defaultLang: AppLanguage = 'de';
    this.#translate.addLangs(availableLangs);
    this.#translate.setDefaultLang(defaultLang);
    this.#translate.use(this.#translate.getBrowserLang() || defaultLang);
  }
}
