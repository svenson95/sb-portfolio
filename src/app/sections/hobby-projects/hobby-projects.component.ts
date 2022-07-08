import { Component } from '@angular/core';

import { viewerOptions } from 'src/app/constants/viewer-options';

@Component({
  selector: 'section#hobby-projects',
  templateUrl: './hobby-projects.component.html'
})
export class HobbyProjectsComponent {
  public options = viewerOptions;
}
