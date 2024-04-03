import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ThemeService } from '../../shared/theme.service';

import { SunUpAndDownAnimation } from './theme.toggle.animation';

@Component({
  selector: 'sb-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [MatIconModule],
  animations: [SunUpAndDownAnimation]
})
export class ThemeToggleComponent {
  public readonly theme = inject(ThemeService);
  public readonly themeToggleLabel = computed(() => `${this.theme.themeString()} mode aktivieren`);
  public readonly iconString = computed(() => this.theme.themeString() + '_mode');
  public readonly isDark = this.theme.isDark;
}
