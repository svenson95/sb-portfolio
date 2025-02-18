import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NAVIGATION_DATA } from '../../constants';

import { HeaderLinkComponent } from './link/link.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';

@Component({
  selector: 'header',
  styles: `
    @use "src/styles/constants";
    @use "src/styles/mixins";

    :host {
      background-color: light-dark(rgba(constants.$white, 0.5), rgba(constants.$black, 0.5));

      @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
        background-color: light-dark(rgba(constants.$white, 0.5), rgba(constants.$grey-2, 0.2));
        @include mixins.backdrop-filter(3px);
      }

      h1 { 
        @apply text-xl font-bold mr-5 leading-5;
        color: light-dark(constants.$lightgray, constants.$mediumgray);
      }
      ul { @apply mr-5 hidden lg:flex gap-3; }
    }
  `,
  template: `
    <h1>
      <span>Portfolio</span>
      <span class="px-2">|</span>
      <span>Sven B.</span>
    </h1>
    <ul class="links">
      @for (item of navigation; track item.id) {
      <li>
        <sb-header-link [navItem]="item"></sb-header-link>
      </li>
      }
    </ul>
    <sb-theme-toggle></sb-theme-toggle>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderLinkComponent, ThemeToggleComponent]
})
export class HeaderComponent {
  readonly navigation = NAVIGATION_DATA;
}
