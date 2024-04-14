import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'sb-card-header',
  // TODO: refactor classes to styles and maybe div with host element
  template: `
    <div class="flex items-center mb-4 p-5 text-xl justify-between">
      <h2 class="mr-2">{{ title() }}</h2>
      <fa-icon [icon]="icon()"></fa-icon>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, FontAwesomeModule]
})
export class CardHeaderComponent {
  public readonly title = input.required<string>();
  public readonly icon = input.required<IconDefinition>();
}
