import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressCard, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

import { CardHeaderComponent } from '../../components';
import { MORE_DATA } from '../../constants';
import { BypassUrlPipe } from '../../pipes';

import { staggerAnimation } from './about.animation';
import { ABOUT_DATA, PROFILE_DATA } from './about.data';

@Component({
  template: `
    <div class="card">
      <section id="about-more">
        @for (link of more; track link.title) {
        <a mat-button target="_blank" rel="noopener noreferrer" [href]="link.href">
          <span class="wrapper">
            <fa-icon [icon]="link.iconSelector"></fa-icon>
            <span>{{ link.title }}</span>
          </span>
        </a>
        }
      </section>
      <section id="about-content">
        <div id="journey">
          <sb-card-header [title]="'content.about.journey.title' | translate" [icon]="faCircleUser"></sb-card-header>

          <div id="journey-list">
            @for (item of about; track item.key) {
            <div>
              <h4 id="journey-year">{{ item.key }}</h4>
              <div [innerHTML]="item.value | translate | bypassUrl : 'html'"></div>
            </div>
            }
          </div>
        </div>

        <div id="personal-data">
          <sb-card-header [title]="'content.about.data.title' | translate" [icon]="faAddressCard"></sb-card-header>

          @defer (on viewport) {
          <div id="personal-data-list" @staggerAnimation>
            @for(item of profile; track item.key) {
            <div id="personal-data-item">
              <div id="personal-data-item-key">{{ 'content.about.data.' + item.key + '.key' | translate }}:</div>
              <div
                id="personal-data-item-value"
                [innerHTML]="'content.about.data.' + item.key + '.value' | translate"
              ></div>
            </div>
            }
          </div>
          } @placeholder() {
          <div id="personal-data-placeholder" class="profile-placeholder">
            @for (_ of profile; track _.key) {
            <div id="placeholder-item"></div>
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
      section#about-more {
        @apply flex justify-center gap-5 mb-5;

        a[mat-button] {
          @apply h-auto;

          .wrapper { @apply flex flex-col items-center py-2; }
          fa-icon { @apply text-2xl; }
        }
      }

      section#about-content {
        @apply flex flex-col md:flex-row gap-5 md:gap-10;

        & > div {
          @apply flex-1;
        }

        #journey-list { @apply flex flex-col gap-3 px-5; }

        #personal-data-list, #personal-data-placeholder {
          @apply flex flex-col gap-3;

          #personal-data-item { @apply flex flex-col lg:flex-row border-b pb-2 px-5; }
          #placeholder-item { @apply h-[51px] lg:h-[30px]; }
        }

        ::ng-deep a:hover {
          text-decoration: underline;
        }

        #personal-data-item-key,
        #journey-year {
          color: light-dark(constants.$lightgray, constants.$mediumgray);
        }

        #personal-data-item-key, #personal-data-item-value { @apply flex-1; }
      }
    }
  `,
  selector: 'section#about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, CardHeaderComponent, BypassUrlPipe, MatButtonModule, TranslateModule],
  animations: [staggerAnimation]
})
export class AboutComponent {
  public readonly more = MORE_DATA;
  public readonly about = ABOUT_DATA;
  public readonly profile = PROFILE_DATA;

  public readonly faCircleUser = faCircleUser;
  public readonly faAddressCard = faAddressCard;
}
