import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import { CardHeaderComponent, ProjectsAccordionComponent } from '../../components';
import { WORK_SAMPLES_DATA } from '../../constants';

@Component({
  selector: 'section#work-samples',
  template: `
    <div class="card">
      <sb-card-header title="Bisherige Projekte" [icon]="faCode"></sb-card-header>

      <sb-projects-accordion [projects]="workSamples" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CardHeaderComponent, ProjectsAccordionComponent]
})
export class WorkSamplesComponent {
  public readonly workSamples = WORK_SAMPLES_DATA;
  public readonly faCode = faCode;
}
