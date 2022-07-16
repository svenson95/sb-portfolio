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
      this.location.replaceState('#about');
    }
    this.scroll.initialize();
  }
}
