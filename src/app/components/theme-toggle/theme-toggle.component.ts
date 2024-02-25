import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'sb-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule]
})
export class ThemeToggleComponent {
  public readonly theme = inject(ThemeService);
  public readonly themeToggleLabel = computed(() => `Zum ${this.theme.themeString()} mode wechseln`);
  public readonly iconString = computed(() => (this.theme.themeString()) + "_mode");
}
