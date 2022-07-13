import { Location } from '@angular/common';
import { Component } from '@angular/core';

import { menu } from 'src/app/constants/menu';

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  public menu = menu;

  public sectionInViewport(menuItem: string): boolean {
    return this.location.path(true).substring(1) === menuItem.substring(1);
  }

  constructor(private location: Location) {}
}
