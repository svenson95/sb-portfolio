import { Injectable, NgZone, inject } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

import { ScrollService } from './scroll.service';

const SCROLL_EVENT = 'scroll';
const SCROLL_DEBOUNCE_TIME = 20;

@Injectable({
  providedIn: 'root'
})
export class ScrollEventService {
  private readonly scrollEvent$ = fromEvent(window, SCROLL_EVENT).pipe(debounceTime(SCROLL_DEBOUNCE_TIME));

  private readonly ngZone = inject(NgZone);
  private readonly scrollService = inject(ScrollService);

  constructor() {
    // Inside runOutsideAngular, events which are usually triggering CD will not do it anymore
    this.ngZone.runOutsideAngular(() => this.updateOnScroll());
  }

  updateOnScroll(): void {
    this.scrollEvent$.subscribe((_: Event) => {
      this.ngZone.run(() => this.scrollService.updateVisibleSection());
    });
  }
}
