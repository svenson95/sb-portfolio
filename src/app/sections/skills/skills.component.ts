import { Component, effect, inject, signal } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { ThemeService } from '../../shared/theme.service';

@Component({
  selector: 'section#skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  private readonly theme = inject(ThemeService);
  private readonly sanitizer = inject(DomSanitizer);

  public readonly nodeJsLogo = signal<SafeUrl | undefined>(undefined);

  constructor() {
    effect(() => {
      const themeString = this.theme.themeString();
      this.nodeJsLogo.set(this.sanitizer.bypassSecurityTrustUrl(`assets/skillset/nodejs-${themeString}.png`));
    });
  }
}
