import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrl } from '@angular/platform-browser';

import { BypassUrlPipe } from '../../pipes/bypass-url.pipe';
import { ThemeService } from '../../shared/theme.service';
import { CardHeaderComponent } from '../../components/card-header/card-header.component';

@Component({
  selector: 'section#skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, CardHeaderComponent, BypassUrlPipe],
})
export class SkillsComponent {
  private readonly theme = inject(ThemeService);
  private readonly pipe = inject(BypassUrlPipe);
  public readonly nodeJsLogo = signal<SafeUrl | undefined>(undefined);

  constructor() {
    effect(() => {
      const themeString = this.theme.themeString();
      this.nodeJsLogo.set(this.pipe.transform(`assets/skillset/nodejs-${themeString}.png`, 'url'));
    }, { allowSignalWrites: true });
  }
}
