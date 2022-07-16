import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { ScrollService } from './shared/scroll.service';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private location: Location, private scroll: ScrollService) {
    if (this.location.path(true) === '') {
      // timeout needed to avoid unintended scroll to anchor
      setTimeout(() => this.location.replaceState('#about'), 0);
    }
    this.scroll.initialize();
  }
}
