import { Component } from '@angular/core';

import { menu } from 'src/app/constants/menu';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  public menu = menu;

  public socials = [
    {
      title: 'linkedin',
      href: 'https://www.linkedin.com/in/sven-brodny-0ba603237'
    },
    {
      title: 'github',
      href: 'https://github.com/svenson95'
    },
    {
      title: 'get-in-it',
      href: 'https://www.get-in-it.de/profil/x5heMCLKDKOACE2iYKHRNSrLhahlKsWl'
    }
  ];
}
