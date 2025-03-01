import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

import { CardHeaderComponent } from '../../components';
import { ImageSource } from '../../models';
import { ThemeService } from '../../shared';

import { ImageComponent } from './image.component';

@Component({
  selector: 'section#skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CardHeaderComponent, ImageComponent, TranslateModule],
  template: `
    <div class="card">
      <sb-card-header title="Skills" [icon]="faBook"></sb-card-header>

      <div class="grid grid-rows-5 grid-flow-col sm:gap-10 gap-4">
        <div class="text-xs sm:text-base">
          <p>{{ 'content.skills.very-good-knowledge' | translate }}</p>
        </div>
        <sb-image source="assets/skillset/angular.png" title="Angular"></sb-image>
        <sb-image source="assets/skillset/typescript.png" title="TypeScript"></sb-image>
        <sb-image source="assets/skillset/html.png" title="HTML5"></sb-image>
        <sb-image source="assets/skillset/css.png" title="CSS3"></sb-image>

        <div class="text-xs sm:text-base">
          <p>{{ 'content.skills.advanced-knowledge' | translate }}</p>
        </div>
        <sb-image [source]="nodeJsLogo()" title="Node.js"></sb-image>
        <sb-image source="assets/skillset/javascript.png" title="JavaScript"></sb-image>
        <sb-image source="assets/skillset/ionic.png" title="Ionic"></sb-image>
        <sb-image source="assets/skillset/mongodb.png" title="MongoDB"></sb-image>

        <div class="text-xs sm:text-base">
          <p [innerHTML]="'content.skills.basic-knowledge' | translate"></p>
        </div>
        <sb-image source="assets/skillset/react.png" title="React"></sb-image>
        <sb-image source="assets/skillset/swift.png" title="Swift"></sb-image>
        <sb-image source="assets/skillset/mysql.png" title="MySQL"></sb-image>
        <sb-image source="assets/skillset/java.png" title="Java"></sb-image>
      </div>
    </div>
  `,
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
