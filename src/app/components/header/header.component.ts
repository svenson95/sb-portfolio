import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NAVIGATION_DATA } from '../../constants';

import { LanguageToggleComponent } from './language-toggle/language-toggle.component';
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
      .header-buttons { @apply flex items-center gap-5; }
    }
  `,
  template: `
    <h1>
      <span>Portfolio</span>
    </h1>
    <ul class="links">
      @for (item of navigation; track item) {
      <li>
        <sb-header-link [navItem]="item"></sb-header-link>
      </li>
      }
    </ul>
    <div class="header-buttons">
      <sb-theme-toggle></sb-theme-toggle>
      <sb-language-toggle></sb-language-toggle>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderLinkComponent, ThemeToggleComponent, LanguageToggleComponent]
})
export class HeaderComponent {
  readonly navigation = NAVIGATION_DATA;
}
