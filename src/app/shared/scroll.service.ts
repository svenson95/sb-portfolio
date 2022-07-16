import { DOCUMENT, Location } from '@angular/common';
import { Inject, Injectable, NgZone } from '@angular/core';
import { fromEvent, debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollEvent$ = fromEvent(window, 'scroll').pipe(debounceTime(20));

  constructor(private ngZone: NgZone, @Inject(DOCUMENT) private document: Document, private location: Location) {}

  public initialize(): void {
    // Inside runOutsideAngular callback, events which are usually triggering CD will not do it anymore - scroll event in this case
    this.ngZone.runOutsideAngular(() => {
      this.scrollEvent$.subscribe((event: Event) => {
        // reenter the Angular zone
        this.ngZone.run(() => {
          // prevent set visible section when app starts
          if (event.timeStamp > 1500) {
            this.setVisibleSection();
          }
        });
      });
    });
  }

  private setVisibleSection(): void {
    const sections = this.document.querySelectorAll('section');

    Array.from(sections).some((section) => {
      if (this.isInViewport(section)) {
        this.location.replaceState('#' + section.id);
        return true;
      }
      return false;
    });
  }

  private isInViewport(el: HTMLElement): boolean {
    const { top, bottom } = el.getBoundingClientRect();
    return top <= 800 && bottom >= 300;
  }
}
