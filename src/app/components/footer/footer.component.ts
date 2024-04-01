import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SOCIALS_DATA, menu } from '../../constants';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class FooterComponent {
  public readonly menu = menu;
  public readonly socials = SOCIALS_DATA;
}
