import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NAVIGATION_DATA } from '../../constants';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

import { HeaderLinkComponent } from './link/link.component';

@Component({
  selector: 'header',
  template: `
    <h1 class="text-xl font-bold mr-5 leading-5">
      <span>Portfolio</span>
      <span class="px-2">|</span>
      <span>Sven B.</span>
    </h1>
    <ul class="links mr-5 hidden lg:flex gap-3">
      @for (item of navigation; track item.id) {
      <li>
        <sb-header-link [navItem]="item"></sb-header-link>
      </li>
      }
    </ul>
    <sb-theme-toggle></sb-theme-toggle>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [HeaderLinkComponent, ThemeToggleComponent]
})
export class HeaderComponent {
  public readonly navigation = NAVIGATION_DATA;
}
