import { Component } from '@angular/core';

import { menu } from 'src/app/constants/menu';
import { socials } from 'src/app/constants/socials';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public menu = menu;

  public socials = socials;
}
