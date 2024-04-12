import { Directive, inject } from '@angular/core';

import { ScrollService } from '../shared';

import { ScrollSectionDirective } from './scroll-section.directive';

@Directive({
  selector: '[sbScrollManager]',
  standalone: true
})
export class ScrollManagerDirective {
  private readonly scrollService = inject(ScrollService);
  private readonly sections = new Map<string, ScrollSectionDirective>();

  public onClick(id: string): void {
    if (!this.sections.has(id)) {
      throw new Error(`${id} must be implemented with ScrollSectionDirective`);
    }

    this.sections.get(id)!.scrollIntoView();
    this.scrollService.setVisibleSection(id);
  }

  public register(section: ScrollSectionDirective): void {
    this.sections.set(section.id, section);
  }

  public remove(section: ScrollSectionDirective): void {
    this.sections.delete(section.id);
  }
}
