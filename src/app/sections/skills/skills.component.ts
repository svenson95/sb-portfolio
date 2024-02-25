import { Component, effect, inject, signal } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';

import { BypassUrlPipe } from '../../pipes/bypass-url.pipe';
import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'section#skills',
  templateUrl: './skills.component.html'
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
