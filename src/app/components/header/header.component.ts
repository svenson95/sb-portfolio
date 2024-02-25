import { Component } from '@angular/core';

import { menu } from '../../constants/menu';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public readonly menu = menu;
}
