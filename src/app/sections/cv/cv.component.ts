import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardHeaderComponent } from '../../components';
import { WORK_DATA } from '../../constants';

@Component({
  selector: 'section#cv',
  template: `
    <div class="card">
      <sb-card-header title="Lebenslauf" icon="fa-table"></sb-card-header>

      <div class="px-5">
        <table class="w-full mb-5">
          @for (item of work; track item.value) {
          <tr>
            <td [innerHTML]="item.dateRange"></td>
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
}
