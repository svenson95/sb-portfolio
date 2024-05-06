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
    const section = this.sections.get(id);
    if (section === undefined) {
      throw new Error(`${id} not found in onClick method of ScrollManagerDirective.`);
    }

    section.scrollIntoView();
    this.scrollService.setVisibleSection(id);
  }

  public register(section: ScrollSectionDirective): void {
    this.sections.set(section.id, section);
  }

  public remove(section: ScrollSectionDirective): void {
    this.sections.delete(section.id);
  }
}
