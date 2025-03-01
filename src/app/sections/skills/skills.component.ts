import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

import { CardHeaderComponent } from '../../components';
import { ImageSource } from '../../models';
import { ThemeService } from '../../shared';

import { ImageComponent } from './image.component';
import { staggerAnimation, staggerAnimationThree, staggerAnimationTwo } from './skills.animation';

type Skill = { source: string; title: string };

@Component({
  selector: 'section#skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CardHeaderComponent, ImageComponent, TranslateModule],
  animations: [staggerAnimation, staggerAnimationTwo, staggerAnimationThree],
  template: `
    <div class="card">
      <sb-card-header title="Skills" [icon]="faBook"></sb-card-header>

      <div class="flex sm:gap-10 gap-4">
        <div class="knowledge-container">
          <div class="text-xs sm:text-sm">
            <p>{{ 'content.skills.very-good-knowledge' | translate }}</p>
          </div>

          @defer(on viewport) {
          <div class="image-container" @skillsStaggerOne>
            @for (knowledge of veryGoodKnowledge; track knowledge.source) {
            <sb-image class="skill-image" [source]="knowledge.source" [title]="knowledge.title"></sb-image>
            }
          </div>
          } @placeholder {
          <div class="image-container">
            @for (_ of veryGoodKnowledge; track _.source) {
            <div class="image-placeholder"></div>
            }
          </div>
          }
        </div>

        <div class="knowledge-container">
          <div class="text-xs sm:text-sm">
            <p>{{ 'content.skills.advanced-knowledge' | translate }}</p>
          </div>

          @defer(on viewport) {
          <div class="image-container" @skillsStaggerTwo>
            @for (knowledge of goodKnowledge; track knowledge.source) { @if (knowledge.source.includes("nodejs")) {
            <sb-image class="skill-image" [source]="nodeJsLogo()" [title]="knowledge.title"></sb-image>
            }@else {
            <sb-image class="skill-image" [source]="knowledge.source" [title]="knowledge.title"></sb-image>
            } }
          </div>
          } @placeholder {
          <div class="image-container">
            @for (_ of goodKnowledge; track _.source) {
            <div class="image-placeholder"></div>
            }
          </div>
          }
        </div>

        <div class="knowledge-container">
          <div class="text-xs sm:text-sm">
            <p [innerHTML]="'content.skills.basic-knowledge' | translate"></p>
          </div>

          @defer(on viewport) {
          <div class="image-container" @skillsStaggerThree>
            @for (knowledge of basicKnowledge; track knowledge.source) {
            <sb-image class="skill-image" [source]="knowledge.source" [title]="knowledge.title"></sb-image>
            }
          </div>
          } @placeholder {
          <div class="image-container">
            @for (_ of basicKnowledge; track _.source) {
            <div class="image-placeholder"></div>
            }
          </div>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    @use "src/styles/constants";

    .knowledge-container {
      @apply flex flex-col flex-1 gap-5 text-center;
    }

    .image-container {
      @apply flex flex-col gap-5 items-center;
    }

    .image-placeholder {
      width: 50px;
      height: 54px;
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

  veryGoodKnowledge: Skill[] = [
    { source: 'assets/skillset/angular.png', title: 'Angular' },
    { source: 'assets/skillset/typescript.png', title: 'TypeScript' },
    { source: 'assets/skillset/html.png', title: 'HTML5' },
    { source: 'assets/skillset/css.png', title: 'CSS3' }
  ];

  goodKnowledge: Skill[] = [
    { source: 'assets/skillset/nodejs-light.png', title: 'Node.js' },
    { source: 'assets/skillset/javascript.png', title: 'JavaScript' },
    { source: 'assets/skillset/ionic.png', title: 'Ionic' },
    { source: 'assets/skillset/mongodb.png', title: 'MongoDB' }
  ];

  basicKnowledge: Skill[] = [
    { source: 'assets/skillset/swift.png', title: 'Swift' },
    { source: 'assets/skillset/react.png', title: 'React' },
    { source: 'assets/skillset/mysql.png', title: 'MySQL' },
    { source: 'assets/skillset/java.png', title: 'Java' }
  ];
}
