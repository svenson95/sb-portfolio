import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CardHeaderComponent } from '../../components';

import { CV_DATA } from './cv.data';

@Component({
  selector: 'section#cv',
  template: `
    <div class="card">
      <sb-card-header [title]="'header.navigation.cv' | translate" [icon]="faTable"></sb-card-header>

      <div class="px-3 md:px-5">
        <table class="w-full mb-5">
          @for (item of data; track item.from) {
          <tr>
            <td>
              @if (item.to !== null) {
              <small>{{ item.to | date : 'LLL YYYY' : '' : currentLang() }}</small>
              <br />
              }
              <small>{{ item.from | date : 'LLL YYYY' : '' : currentLang() }}</small>
            </td>
            <td>
              <div [innerHTML]="'content.cv.' + item.profession | translate"></div>
              <small>{{ item.company }}</small>
            </td>
          </tr>
          }
        </table>
      </div>
    </div>
  `,
  styles: `
    @use "src/styles/constants";
    
    table {
      tr:not(:last-of-type) td {
        border-bottom: 1px solid constants.$border-color;
      }

      tr:nth-child(even) {
        background-color: light-dark(rgba(constants.$lightboxgray, 0.2), rgba(constants.$mediumgray, 0.1));
      }

      th {
        padding-bottom: 0.5em;
      }

      td {
        padding: 8px;
      }

      td:nth-of-type(1) {
        width: 90px;
        font-family: constants.$monospace-font;
      }

      td:nth-of-type(2) div {
        font-size: 0.8rem;
      }

      td span {
        font-weight: 600;
      }

      small {
        color: light-dark(constants.$lightgray, constants.$mediumgray);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardHeaderComponent, TranslateModule, DatePipe]
})
export class CvComponent {
  readonly #translate = inject(TranslateService);
  readonly currentLang = signal<string>('de-DE');

  readonly data = CV_DATA;
  readonly faTable = faTableList;

  constructor() {
    this.listenToLangChanges();
  }

  listenToLangChanges(): void {
    this.#translate.onLangChange.pipe(takeUntilDestroyed()).subscribe((params) => {
      let langId = '';
      switch (params.lang) {
        case 'de':
          langId = 'de-DE';
          break;
        case 'en':
          langId = 'en-US';
          break;
        default:
          langId = 'de-DE';
          break;
      }
      this.currentLang.set(langId);
    });
  }
}
