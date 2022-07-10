import { Component } from '@angular/core';

import { Theme, ThemeService } from 'src/app/shared/theme.service';

@Component({
  selector: 'section#skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  public get nodeJsLogo(): string {
    const color = this.theme.isDark ? Theme.LIGHT : Theme.DARK;
    return `assets/skillset/nodejs-${color}.png`;
  }
  constructor(private theme: ThemeService) {}
}
