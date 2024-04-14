import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faTableList } from '@fortawesome/free-solid-svg-icons';

import { CardHeaderComponent } from '../../components';
import { WORK_DATA } from '../../constants';

@Component({
  selector: 'section#cv',
  template: `
    <div class="card">
      <sb-card-header title="Lebenslauf" [icon]="faTable"></sb-card-header>

      <div class="px-3 md:px-5">
        <table class="w-full mb-5">
          @for (item of work; track item.value) {
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
  public readonly work = WORK_DATA;
  public readonly faTable = faTableList;
}
