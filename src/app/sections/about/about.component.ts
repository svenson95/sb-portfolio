import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAddressCard, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import { CardHeaderComponent, InNewTabDirective, LinkComponent } from '../../components';
import { ABOUT_DATA, PROFILE_DATA, SOCIALS_DATA } from '../../constants';
import { BypassUrlPipe } from '../../pipes';

import { staggerAnimation } from './about.animation';

@Component({
  selector: 'section#about',
  templateUrl: './about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    CardHeaderComponent,
    BypassUrlPipe,
    InNewTabDirective,
    MatButtonModule,
    LinkComponent
  ],
  animations: [staggerAnimation]
})
export class AboutComponent {
  public readonly socials = SOCIALS_DATA;
  public readonly about = ABOUT_DATA;
  public readonly profile = PROFILE_DATA;

  public readonly faCircleUser = faCircleUser;
  public readonly faAddressCard = faAddressCard;
}
