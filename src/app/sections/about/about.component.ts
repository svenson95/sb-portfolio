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
  selector: 'section#about',
  template: `
    <div class="card">
      <section id="more" class="flex justify-center gap-5 mb-5">
        @for (link of more; track link.title) {
        <a mat-button target="_blank" rel="noopener noreferrer" [href]="link.href">
          <span class="flex flex-col items-center py-2">
            <fa-icon class="text-2xl" [icon]="link.iconSelector"></fa-icon>
            <span>{{ link.title }}</span>
          </span>
        </a>
        }
      </section>
      <section class="flex flex-col md:flex-row gap-5 md:gap-10">
        <div class="flex-1">
          <sb-card-header [title]="'content.about.journey.title' | translate" [icon]="faCircleUser"></sb-card-header>

          <div class="flex flex-col gap-3 px-5">
            @for (item of about; track item.key) {
            <div>
              <h4 class="subtitle">{{ item.key }}</h4>
              <div [innerHTML]="item.value | translate | bypassUrl : 'html'"></div>
            </div>
            }
          </div>
        </div>

        <div class="flex-1">
          <sb-card-header [title]="'content.about.data.title' | translate" [icon]="faAddressCard"></sb-card-header>

          @defer (on viewport) {
          <div class="flex flex-col gap-3" @staggerAnimation>
            @for(item of profile; track item.key) {
            <div class="about-profile-item flex flex-col lg:flex-row border-b pb-2 px-5">
              <div class="key flex-1">{{ 'content.about.data.' + item.key + '.key' | translate }}:</div>
              <div class="value flex-1" [innerHTML]="'content.about.data.' + item.key + '.value' | translate"></div>
            </div>
            }
          </div>
          } @placeholder() {
          <div>not on viewport...</div>
          }
        </div>
      </section>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, CardHeaderComponent, BypassUrlPipe, MatButtonModule, TranslateModule],
  animations: [staggerAnimation],
  styles: `
    @use "src/styles/constants";
    
    :host {
      #more a.mat-mdc-button {
        height: auto;
        color: var(--mat-sys-primary);
      }

      div > ::ng-deep a:hover {
        text-decoration: underline;
      }

      div.key,
      .subtitle {
        color: light-dark(constants.$lightgray, constants.$mediumgray);
      }
    }
  `
})
export class AboutComponent {
  public readonly more = MORE_DATA;
  public readonly about = ABOUT_DATA;
  public readonly profile = PROFILE_DATA;

  public readonly faCircleUser = faCircleUser;
  public readonly faAddressCard = faAddressCard;
}
