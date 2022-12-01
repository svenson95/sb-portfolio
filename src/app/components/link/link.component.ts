import { Component, Input } from '@angular/core';
import { IHTMLTarget } from "../../models/html-target";

@Component({
  selector: 'sb-link',
  templateUrl: './link.component.html',
})
export class LinkComponent {
  @Input()
  url: string = "/";

  newTab: boolean = false;

  get target(): IHTMLTarget {
    return this.newTab ? "_blank" : "_self";
  };

  get rel(): string {
    return this.newTab ? "noopener noreferrer" : "";
  };
}
