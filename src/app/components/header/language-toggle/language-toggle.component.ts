import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppLanguage } from '../../../models';

interface SelectLanguage {
  code: AppLanguage;
  label: string;
}

@Component({
  selector: 'sb-language-toggle',
  template: `
    <select
      (change)="changeLanguage(languageSelect.value)"
      [matTooltip]="'header.language.switch-tooltip' | translate"
      #languageSelect
    >
      @for (lang of languages; track lang.code) {
      <option [value]="lang.code" [selected]="lang.code === currentLocale">
        {{ lang.label | translate }}
      </option>
      }
    </select>
  `,
  styles: `
    select { @apply bg-transparent text-primary-color cursor-pointer; }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatTooltipModule, TranslateModule]
})
export class LanguageToggleComponent {
  #translate = inject(TranslateService);
  currentLocale = this.#translate.currentLang;

  readonly languages: SelectLanguage[] = [
    { code: 'de', label: 'header.language.german' },
    { code: 'en', label: 'header.language.english' }
  ];

  changeLanguage(lang: string): void {
    this.#translate.use(lang);
  }
}
