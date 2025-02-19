import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AvailableLanguage } from '../../../models';

interface SelectLanguage {
  code: AvailableLanguage;
  label: string;
}

@Component({
  selector: 'sb-language-toggle',
  template: `
    <select
      (change)="changeLocale($any($event.target).value)"
      [matTooltip]="'header.language.switch-tooltip' | translate"
    >
      @for (lang of languages; track lang.code) {
      <option [value]="lang.code" [selected]="lang.code === currentLocale">
        {{ lang.label | translate }}
      </option>
      }
    </select>
  `,
  styles: `
    select { @apply bg-transparent text-primary-color; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatTooltipModule, TranslateModule]
})
export class LanguageToggleComponent {
  readonly #translate = inject(TranslateService);
  readonly currentLocale = this.#translate.currentLang;

  readonly languages: SelectLanguage[] = [
    { code: 'de', label: 'header.language.german' },
    { code: 'en', label: 'header.language.english' }
  ];

  changeLocale(lang: AvailableLanguage): void {
    this.#translate.use(lang);
  }
}
