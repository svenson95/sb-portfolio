import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { ScrollService } from '../../../shared/scroll.service';

@Component({
  selector: 'sb-header-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule]
})
export class HeaderLinkComponent {
  private readonly scroll = inject(ScrollService);

  public readonly menuItem = input.required<{ title: string; href: string }>();
  public readonly isInViewport = signal<boolean>(false);

  constructor() {
    effect(() => {
      const visibleSectionId = this.scroll.visibleSection();
      const linkId = this.menuItem().href.substring(1);
      this.isInViewport.set(visibleSectionId === linkId);
    }, { allowSignalWrites: true });
  }
}
