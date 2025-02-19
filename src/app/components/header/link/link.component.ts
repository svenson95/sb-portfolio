import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';

import { ScrollAnchorDirective } from '../../../directives';
import { ScrollService } from '../../../shared';

@Component({
  selector: 'sb-header-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, ScrollAnchorDirective, TranslateModule],
  template: `
    <a mat-button [sbScrollAnchor]="navItem()" [class.in-viewport]="isInViewport()" [disabled]="isInViewport()">
      {{ 'header.navigation.' + navItem() | translate }}
    </a>
  `
})
export class HeaderLinkComponent {
  private readonly scroll = inject(ScrollService);

  public readonly navItem = input.required<string>();
  public readonly isInViewport = signal<boolean>(false);

  public visibleSectionEffect = effect(
    () => {
      const visibleSectionId = this.scroll.visibleSection();
      this.isInViewport.set(visibleSectionId === this.navItem());
    },
    { allowSignalWrites: true }
  );
}
