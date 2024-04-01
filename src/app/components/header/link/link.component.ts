import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { MenuItem } from '../../../models';
import { ScrollService } from '../../../shared';

@Component({
  selector: 'sb-header-link',
  templateUrl: './link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule]
})
export class HeaderLinkComponent {
  private readonly scroll = inject(ScrollService);

  public readonly menuItem = input.required<MenuItem>();
  public readonly isInViewport = signal<boolean>(false);

  public visibleSectionEffect = effect(
    () => {
      const visibleSectionId = this.scroll.visibleSection();
      const linkId = this.menuItem().id;
      this.isInViewport.set(visibleSectionId === linkId);
    },
    { allowSignalWrites: true }
  );
}
