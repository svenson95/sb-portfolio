import { Component } from '@angular/core';

import { viewerOptions } from 'src/app/constants/viewer-options';

@Component({
  selector: 'section#hobby-projects',
  templateUrl: './hobby-projects.component.html',
  styleUrls: ['./hobby-projects.component.scss']
})
export class HobbyProjectsComponent {
  public options = viewerOptions;
}
