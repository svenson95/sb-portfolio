import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Theme, ThemeService } from '../../shared/theme.service';

import { SunUpAndDownAnimation } from './theme.toggle.animation';

@Component({
  selector: 'sb-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule, MatTooltipModule],
  animations: [SunUpAndDownAnimation]
})
export class ThemeToggleComponent {
  readonly theme = inject(ThemeService);
  readonly themeToggleLabel = computed(() => `${this.isDark() ? Theme.LIGHT : Theme.DARK} mode aktivieren`);
  readonly iconString = computed(() => this.theme.themeString() + '_mode');
  readonly isDark = this.theme.isDark;
}
