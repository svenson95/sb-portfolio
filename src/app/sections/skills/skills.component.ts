import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

import { CardHeaderComponent } from '../../components';
import { BypassUrlPipe } from '../../pipes';
import { ThemeService } from '../../shared';

@Component({
  selector: 'section#skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, CardHeaderComponent, BypassUrlPipe]
})
export class SkillsComponent {
  private readonly theme = inject(ThemeService);
  private readonly pipe = inject(BypassUrlPipe);
  public readonly nodeJsLogo = signal<SafeUrl | undefined>(undefined);

  public themeEffect = effect(
    () => {
      const themeString = this.theme.themeString();
      this.nodeJsLogo.set(this.pipe.transform(`assets/skillset/nodejs-${themeString}.png`, 'url'));
    },
    { allowSignalWrites: true }
  );
}
