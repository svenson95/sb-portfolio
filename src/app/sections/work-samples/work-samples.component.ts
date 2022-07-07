import { Component } from '@angular/core';

import { viewerOptions } from 'src/app/constants/viewer-options';

@Component({
  selector: 'section#work-samples',
  templateUrl: './work-samples.component.html',
  styleUrls: ['./work-samples.component.scss']
})
export class WorkSamplesComponent {
  public options = viewerOptions;
}
