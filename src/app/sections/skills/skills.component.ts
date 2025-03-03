import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

import { CardHeaderComponent } from '../../components';
import { ImageSource } from '../../models';
import { ThemeService } from '../../shared';

import { ImageComponent } from './image.component';
import { staggerAnimationOne, staggerAnimationThree, staggerAnimationTwo } from './skills.animation';

type Skill = { source: string; title: string };

@Component({
  template: `
    <div class="card">
      <sb-card-header title="Skills" [icon]="faBook"></sb-card-header>

      <section id="skills-content">
        <div class="knowledge-container">
          <div class="knowledge-label">
            <p>{{ 'content.skills.very-good-knowledge' | translate }}</p>
          </div>

          @defer(on viewport) {
          <div class="image-container" @skillsStaggerOne>
            @for (knowledge of veryGoodKnowledge(); track knowledge.source) {
            <sb-image class="skill-image" [source]="knowledge.source" [title]="knowledge.title"></sb-image>
            }
          </div>
          } @placeholder {
          <div class="image-container">
            @for (_ of veryGoodKnowledge(); track _.source) {
            <div class="image-placeholder"></div>
            }
          </div>
          }
        </div>

        <div class="knowledge-container">
          <div class="knowledge-label">
            <p>{{ 'content.skills.advanced-knowledge' | translate }}</p>
          </div>

          @defer(on viewport) {
          <div class="image-container" @skillsStaggerTwo>
            @for (knowledge of goodKnowledge(); track knowledge.source) {
            <sb-image class="skill-image" [source]="knowledge.source" [title]="knowledge.title"></sb-image>
            }
          </div>
          } @placeholder {
          <div class="image-container">
            @for (_ of goodKnowledge(); track _.source) {
            <div class="image-placeholder"></div>
            }
          </div>
          }
        </div>

        <div class="knowledge-container">
          <div class="knowledge-label">
            <p [innerHTML]="'content.skills.basic-knowledge' | translate"></p>
          </div>

          @defer(on viewport) {
          <div class="image-container" @skillsStaggerThree>
            @for (knowledge of basicKnowledge(); track knowledge.source) {
            <sb-image class="skill-image" [source]="knowledge.source" [title]="knowledge.title"></sb-image>
            }
          </div>
          } @placeholder {
          <div class="image-container">
            @for (_ of basicKnowledge(); track _.source) {
            <div class="image-placeholder"></div>
            }
          </div>
          }
        </div>
      </section>
    </div>
  `,
  styles: `
    @use "src/styles/constants";

    :host { 
      @apply flex; 
    
      section#skills-content { 
        @apply flex sm:gap-10 gap-4; 
      }

      .knowledge-container {
        @apply flex flex-col flex-1 gap-5 text-center;

        .knowledge-label { @apply text-xs sm:text-sm; }
      }

      .image-container {
        @apply flex flex-col gap-10 items-center;

        .image-placeholder { @apply w-[50px] h-[54px]; }
      }
    }
  `,
  selector: 'section#skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CardHeaderComponent, ImageComponent, TranslateModule],
  animations: [staggerAnimationOne, staggerAnimationTwo, staggerAnimationThree]
})
export class SkillsComponent {
  private theme = inject(ThemeService);
  private readonly imagesDirectory = 'assets/skillset/';

  faBook = faBook;
  nodeJsLogo = computed<ImageSource>(() => this.imagesDirectory + `nodejs-${this.theme.themeString()}.png`);

  veryGoodKnowledge = computed<Skill[]>(() => [
    { source: this.imagesDirectory + 'angular.png', title: 'Angular' },
    { source: this.imagesDirectory + 'typescript.png', title: 'TypeScript' },
    { source: this.imagesDirectory + 'html.png', title: 'HTML5' },
    { source: this.imagesDirectory + 'css.png', title: 'CSS3' }
  ]);

  goodKnowledge = computed<Skill[]>(() => [
    { source: this.nodeJsLogo(), title: 'Node.js' },
    { source: this.imagesDirectory + 'javascript.png', title: 'JavaScript' },
    { source: this.imagesDirectory + 'ionic.png', title: 'Ionic' },
    { source: this.imagesDirectory + 'mongodb.png', title: 'MongoDB' }
  ]);

  basicKnowledge = computed<Skill[]>(() => [
    { source: this.imagesDirectory + 'swift.png', title: 'Swift' },
    { source: this.imagesDirectory + 'react.png', title: 'React' },
    { source: this.imagesDirectory + 'mysql.png', title: 'MySQL' },
    { source: this.imagesDirectory + 'java.png', title: 'Java' }
  ]);
}
