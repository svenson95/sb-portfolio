import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, NgZone, inject, signal } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private readonly scrollEvent$ = fromEvent(window, 'scroll').pipe(debounceTime(20));
  private readonly ngZone = inject(NgZone);

  public readonly visibleSection = signal<string | undefined>(undefined);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public initialize(): void {
    // Inside runOutsideAngular, events which are usually triggering CD will not do it anymore
    this.ngZone.runOutsideAngular(() => {
      this.scrollEvent$.subscribe((_: Event) => {
        // reenter the Angular zone after event subscribed
        this.ngZone.run(() => {
          const visibleSection = this.getVisibleSection();
          if (visibleSection && this.visibleSection() !== visibleSection) {
            this.setVisibleSection(visibleSection);
          }
        });
      });
    });
  }

  public setVisibleSection(sectionId: string): void {
    this.visibleSection.set(sectionId);
  }

  private getVisibleSection(): string | undefined {
    const sections = Array.from(this.document.querySelectorAll('section'));
    const visibleSection = sections.find(this.isInViewport);
    return visibleSection?.id ?? undefined;
  }

  private isInViewport(el: HTMLElement): boolean {
    const { top, bottom } = el.getBoundingClientRect();
    return top <= 800 && bottom >= 300;
  }
}
