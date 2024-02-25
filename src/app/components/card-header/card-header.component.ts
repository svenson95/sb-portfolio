import { Component, input } from '@angular/core';

@Component({
  selector: 'sb-card-header',
  templateUrl: './card-header.component.html'
})
export class CardHeaderComponent {
  public readonly title = input.required<string>();
  public readonly icon = input.required<string>();
}
