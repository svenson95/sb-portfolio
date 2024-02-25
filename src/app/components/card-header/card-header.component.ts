import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'sb-card-header',
  template: `
    <div class="flex items-center mb-4 p-5 text-xl justify-between">
      <h2 class="mr-2">{{ title() }}</h2>
      <i class="fa-solid" [ngClass]="icon()"></i>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule]
})
export class CardHeaderComponent {
  public readonly title = input.required<string>();
  public readonly icon = input.required<string>();
}
