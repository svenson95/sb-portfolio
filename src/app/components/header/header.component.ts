import { ChangeDetectionStrategy, Component } from '@angular/core';

import { menu } from '../../constants';
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
      @for (item of menu; track item.id) {
      <li>
        <sb-header-link [menuItem]="item"></sb-header-link>
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
  public readonly menu = menu;
}
