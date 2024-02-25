import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { menu } from 'src/app/constants/menu';
import { socials } from 'src/app/constants/socials';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class FooterComponent {
  public readonly menu = menu;
  public readonly socials = socials;
}
