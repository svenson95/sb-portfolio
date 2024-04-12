import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { NavigationItem } from '../../../models';
import { ScrollService } from '../../../shared';

@Component({
  selector: 'sb-header-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatButtonModule],
  template: `
    <a [href]="'#' + navItem().id" mat-button [class.in-viewport]="isInViewport()" [disabled]="isInViewport()">
      {{ navItem().title }}
    </a>
  `
})
export class HeaderLinkComponent {
  private readonly scroll = inject(ScrollService);

  public readonly navItem = input.required<NavigationItem>();
  public readonly isInViewport = signal<boolean>(false);

  public visibleSectionEffect = effect(
    () => {
      const visibleSectionId = this.scroll.visibleSection();
      const linkId = this.navItem().id;
      this.isInViewport.set(visibleSectionId === linkId);
    },
    { allowSignalWrites: true }
  );
}
