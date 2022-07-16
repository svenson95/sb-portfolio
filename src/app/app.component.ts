import { Component } from '@angular/core';

import { ScrollService } from './shared/scroll.service';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private scroll: ScrollService) {
    this.scroll.initialize();
  }
}
