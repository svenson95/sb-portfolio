import { Component } from '@angular/core';

import { viewerOptions } from 'src/app/constants/viewer-options';

@Component({
  selector: 'section#work-examples',
  templateUrl: './work-examples.component.html',
  styleUrls: ['./work-examples.component.scss']
})
export class WorkExamplesComponent {
  public options = viewerOptions;
}
