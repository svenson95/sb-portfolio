import { Directive } from "@angular/core";
import { LinkComponent } from "./link.component";

@Directive({
  selector: 'sb-link[inNewTab]'
})
export class InNewTabDirective {
  constructor(private linkComponent: LinkComponent) {
    this.linkComponent.newTab = true
  }
}
