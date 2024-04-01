import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CardHeaderComponent, ProjectsAccordionComponent } from '../../components';
import { HOBBY_PROJECTS_DATA } from '../../constants';

@Component({
  selector: 'section#hobby-projects',
  template: `
    <div class="card">
      <sb-card-header title="Hobby-Projekte" icon="fa-code"></sb-card-header>

      <sb-projects-accordion [projects]="hobbyProjects" />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CardHeaderComponent, ProjectsAccordionComponent]
})
export class HobbyProjectsComponent {
  public readonly hobbyProjects = HOBBY_PROJECTS_DATA;
}
