import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
