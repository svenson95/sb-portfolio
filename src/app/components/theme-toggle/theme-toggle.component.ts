import { Component } from '@angular/core';

import { Theme, ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'sb-theme-toggle',
  templateUrl: './theme-toggle.component.html'
})
export class ThemeToggleComponent {
  public get toggleLabel(): string {
    return `Zum ${this.theme.isDark ? Theme.LIGHT : Theme.DARK} mode wechseln`;
  }

  public Theme = Theme;

  constructor(public theme: ThemeService) {}
}
