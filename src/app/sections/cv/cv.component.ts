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
          @for (item of data; track item.value) {
          <tr>
            <td>
              @if (item.to !== null) {
              <small>{{ item.to }}</small>
              <br />
              }
              <small>{{ item.from }}</small>
            </td>
            <td [innerHTML]="item.value"></td>
          </tr>
          }
        </table>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CardHeaderComponent]
})
export class CvComponent {
  public readonly data = CV_DATA;
  public readonly faTable = faTableList;
}
