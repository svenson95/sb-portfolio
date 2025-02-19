import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

import { CardHeaderComponent, ProjectsAccordionComponent } from '../../components';

import { WORK_SAMPLES_DATA } from './work-samples.data';

@Component({
  selector: 'section#work-samples',
  template: `
    <div class="card">
      <sb-card-header [title]="'header.navigation.work-samples' | translate" [icon]="faCode"></sb-card-header>

      <sb-projects-accordion [projects]="workSamples" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardHeaderComponent, ProjectsAccordionComponent, TranslateModule]
})
export class WorkSamplesComponent {
  public readonly workSamples = WORK_SAMPLES_DATA;
  public readonly faCode = faCode;
}
