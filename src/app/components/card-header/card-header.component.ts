import { Component, Input } from '@angular/core';

@Component({
  selector: 'sb-card-header',
  templateUrl: './card-header.component.html'
})
export class CardHeaderComponent {
  @Input() public title!: string;
  @Input() public icon!: string;
}
