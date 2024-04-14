import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faCode } from '@fortawesome/free-solid-svg-icons';

import { CardHeaderComponent, ProjectsAccordionComponent } from '../../components';
import { HOBBY_PROJECTS_DATA } from '../../constants';

@Component({
  selector: 'section#hobby-projects',
  // TODO: refactor div.card with host element
  template: `
    <div class="card">
      <sb-card-header title="Hobby-Projekte" [icon]="faCode"></sb-card-header>

      <sb-projects-accordion [projects]="hobbyProjects" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CardHeaderComponent, ProjectsAccordionComponent]
})
export class HobbyProjectsComponent {
  public readonly hobbyProjects = HOBBY_PROJECTS_DATA;
  public readonly faCode = faCode;
}
