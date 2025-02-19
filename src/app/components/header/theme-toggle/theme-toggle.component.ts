import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';

import { Theme, ThemeService } from '../../../shared/theme.service';

import { SunUpAndDownAnimation } from './theme.toggle.animation';

@Component({
  selector: 'sb-theme-toggle',
  template: `
    <button
      mat-icon-button
      type="button"
      (click)="theme.toggle()"
      [matTooltip]="'header.theme.tooltip' | translate : { value: nextTheme() }"
    >
      <mat-icon [@sunUpAndDown]="isDark()">{{ iconString() }}</mat-icon>
    </button>
  `,
  styles: `
    button { @apply flex; }
    mat-icon { color: var(--mat-sys-primary); }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, MatTooltipModule, TranslateModule],
  animations: [SunUpAndDownAnimation]
})
export class ThemeToggleComponent {
  readonly theme = inject(ThemeService);

  readonly iconString = computed(() => this.theme.themeString() + '_mode');
  readonly isDark = this.theme.isDark;
  readonly nextTheme = computed(() => (this.isDark() ? Theme.LIGHT : Theme.DARK));
}
