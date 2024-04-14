import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { NAVIGATION_DATA, SOCIALS_DATA } from '../../constants';
import { ScrollAnchorDirective } from '../../directives';

@Component({
  selector: 'footer',
  standalone: true,
  imports: [CommonModule, ScrollAnchorDirective, FontAwesomeModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="wrapper flex flex-col sm:flex-row w-full items-center sm:justify-between m-5 xl:mx-auto py-5">
      <div class="flex gap-12">
        <div class="flex flex-col gap-3">
          <h3 class="font-bold">Navigation</h3>
          <ul>
            @for (item of navigation; track item.id) {
            <li>
              <a class="cursor-pointer" [sbScrollAnchor]="item.id">
                <small>{{ item.title }}</small>
              </a>
            </li>
            }
          </ul>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="font-bold">Social Media</h3>
          <ul>
            @for (item of socials; track item.href) {
            <li>
              <a [title]="'Profil auf ' + item.title" [href]="item.href" target="_blank" rel="noopener">
                <fa-icon [icon]="item.iconSelector"></fa-icon>
                <small>{{ item.title }}</small>
              </a>
            </li>
            }
          </ul>
        </div>
      </div>

      <small class="flex whitespace-nowrap items-baseline mt-8 sm:mt-0">
        Made with <fa-icon [icon]="faHeart" class="mx-1"></fa-icon> in Magdeburg
      </small>
    </div>
  `
})
export class FooterComponent {
  readonly navigation = NAVIGATION_DATA;
  readonly socials = SOCIALS_DATA;

  readonly faHeart = faHeart;
}
