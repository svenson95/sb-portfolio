import { Directive, HostListener, Input, inject } from '@angular/core';

import { ScrollManagerDirective } from './scroll-manager.directive';

@Directive({
  selector: '[sbScrollAnchor]',
  standalone: true
})
export class ScrollAnchorDirective {
  @Input('sbScrollAnchor') id!: string;

  readonly manager = inject(ScrollManagerDirective, { skipSelf: true });

  @HostListener('click')
  onClick(): void {
    this.manager.onClick(this.id);
  }
}
