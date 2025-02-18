import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faTableList } from '@fortawesome/free-solid-svg-icons';

import { CardHeaderComponent } from '../../components';

import { CV_DATA } from './cv.data';

@Component({
  selector: 'section#cv',
  template: `
    <div class="card">
      <sb-card-header title="Lebenslauf" [icon]="faTable"></sb-card-header>

      <div class="px-3 md:px-5">
        <table class="w-full mb-5">
          @for (item of data; track item.from) {
          <tr>
            <td>
              @if (item.to !== null) {
              <small>{{ item.to }}</small>
              <br />
              }
              <small>{{ item.from }}</small>
            </td>
            <td>
              <div [innerHTML]="item.profession"></div>
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
        width: 80px;
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
  imports: [CardHeaderComponent]
})
export class CvComponent {
  public readonly data = CV_DATA;
  public readonly faTable = faTableList;
}
