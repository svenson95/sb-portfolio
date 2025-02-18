import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'sb-card-header',
  template: `
    <h2 class="mr-2">{{ title() }}</h2>
    <fa-icon [icon]="icon()"></fa-icon>
  `,
  styles: `
    @use "src/styles/constants";
    
    :host {
      @apply flex items-center mb-4 p-5 text-xl justify-between border-b-[1px];

      h2 {
        font-family: constants.$secondary-font;
        text-transform: uppercase;
      }

      fa-icon ::ng-deep svg {
        color: light-dark(constants.$lightgray, constants.$mediumgray);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FontAwesomeModule]
})
export class CardHeaderComponent {
  public readonly title = input.required<string>();
  public readonly icon = input.required<IconDefinition>();
}
