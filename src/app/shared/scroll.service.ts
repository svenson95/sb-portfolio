import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  readonly visibleSection = signal<string | undefined>(undefined);
  readonly document = inject(DOCUMENT);

  setVisibleSection(sectionId: string): void {
    this.visibleSection.set(sectionId);
  }

  getVisibleSection(): string | undefined {
    const SECTION_SELECTOR = 'section';
    const sections = Array.from(this.document.querySelectorAll(SECTION_SELECTOR));
    const visibleSection = sections.find(this.isInViewport);
    return visibleSection?.id ?? undefined;
  }

  isInViewport(el: HTMLElement): boolean {
    const { top, bottom } = el.getBoundingClientRect();
    const topOffset = 800;
    const bottomOffset = 300;
    return top <= topOffset && bottom >= bottomOffset;
  }

  updateVisibleSection(): void {
    const visibleSection = this.getVisibleSection();
    const isNotSelected = this.visibleSection() !== visibleSection;
    if (visibleSection && isNotSelected) {
      this.setVisibleSection(visibleSection);
    }
  }
}
