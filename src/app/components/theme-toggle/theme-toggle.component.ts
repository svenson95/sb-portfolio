import { Component, computed, inject } from '@angular/core';

import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'sb-theme-toggle',
  templateUrl: './theme-toggle.component.html'
})
export class ThemeToggleComponent {
  public readonly theme = inject(ThemeService);
  public readonly themeToggleLabel = computed(() => `Zum ${this.theme.themeString()} mode wechseln`);
  public readonly iconString = computed(() => (this.theme.themeString()) + "_mode");
}
