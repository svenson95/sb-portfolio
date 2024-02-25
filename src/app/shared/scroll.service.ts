import { DOCUMENT, Location } from '@angular/common';
import { Inject, Injectable, NgZone, inject, signal } from '@angular/core';
import { fromEvent, debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private readonly scrollEvent$ = fromEvent(window, 'scroll').pipe(debounceTime(20));
  private readonly ngZone = inject(NgZone);
  private readonly location = inject(Location);

  public readonly visibleSection = signal<string | undefined>(undefined);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public initialize(): void {
    // Inside runOutsideAngular, events which are usually triggering CD will not do it anymore
    this.ngZone.runOutsideAngular(() => {
      this.scrollEvent$.subscribe((_: Event) => {
        // reenter the Angular zone after event subscribed
        this.ngZone.run(() => {
          this.setVisibleSection();
        });
      });
    });
  }

  private setVisibleSection(): void {
    const sections = Array.from(this.document.querySelectorAll('section'));
    const visibleSection = sections.find(this.isInViewport);
    if (visibleSection) {
      this.visibleSection.set(visibleSection.id);
      this.location.replaceState('#' + visibleSection.id);
    }
  }

  private isInViewport(el: HTMLElement): boolean {
    const { top, bottom } = el.getBoundingClientRect();
    return top <= 800 && bottom >= 300;
  }
}
