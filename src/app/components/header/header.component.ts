import { Component } from '@angular/core';

import { menu } from 'src/app/constants/menu';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public menu = menu;
}
