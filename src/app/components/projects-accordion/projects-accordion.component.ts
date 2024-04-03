import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { PanelData } from '../../models';

import { ThumbnailPipe } from './thumbnail.pipe';

@Component({
  selector: 'sb-projects-accordion',
  templateUrl: './projects-accordion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatExpansionModule, ThumbnailPipe]
})
export class ProjectsAccordionComponent {
  public readonly projects = input.required<PanelData[]>();
}
