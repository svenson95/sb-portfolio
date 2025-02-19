import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressCard, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';

import { CardHeaderComponent } from '../../components';
import { SOCIALS_DATA } from '../../constants';
import { BypassUrlPipe } from '../../pipes';

import { staggerAnimation } from './about.animation';
import { ABOUT_DATA, PROFILE_DATA } from './about.data';

@Component({
  selector: 'section#about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, CardHeaderComponent, BypassUrlPipe, MatButtonModule, TranslateModule],
  animations: [staggerAnimation],
  styles: `
    @use "src/styles/constants";
    
    :host {
      #socials a.mat-mdc-button {
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
  public readonly socials = SOCIALS_DATA;
  public readonly about = ABOUT_DATA;
  public readonly profile = PROFILE_DATA;

  public readonly faCircleUser = faCircleUser;
  public readonly faAddressCard = faAddressCard;
}
