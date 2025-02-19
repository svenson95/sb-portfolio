import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

import { CardHeaderComponent, ProjectsAccordionComponent } from '../../components';

import { HOBBY_PROJECTS_DATA } from './hobby-projects.data';

@Component({
  selector: 'section#hobby-projects',
  // TODO: refactor div.card with host element
  template: `
    <div class="card">
      <sb-card-header [title]="'header.navigation.hobby-projects' | translate" [icon]="faCode"></sb-card-header>

      <sb-projects-accordion [projects]="hobbyProjects" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CardHeaderComponent, ProjectsAccordionComponent, TranslateModule]
})
export class HobbyProjectsComponent {
  public readonly hobbyProjects = HOBBY_PROJECTS_DATA;
  public readonly faCode = faCode;
}
