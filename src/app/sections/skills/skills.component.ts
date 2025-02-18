import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';

import { CardHeaderComponent } from '../../components';
import { ImageSource } from '../../models';
import { ThemeService } from '../../shared';

import { ImageComponent } from './image.component';

@Component({
  selector: 'section#skills',
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CardHeaderComponent, ImageComponent],
  styles: `
    @use "src/styles/constants";

    div.grid {
      grid-template-rows: min-content 1fr 1fr 1fr 1fr;

      * {
        align-self: center;
        justify-self: center;
        text-align: center;
      }
    }

    small,
    i {
      color: light-dark(constants.$lightgray, constants.$mediumgray);
    }
  `
})
export class SkillsComponent {
  private readonly theme = inject(ThemeService);
  public readonly nodeJsLogo = computed<ImageSource>(() => `assets/skillset/nodejs-${this.theme.themeString()}.png`);
  public readonly faBook = faBook;
}
