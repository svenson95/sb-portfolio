import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'sb-link',
  template: `
    <a [href]="url()" [target]="target()" [rel]="rel()">
      <ng-content></ng-content>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: []
})
export class LinkComponent {
  public readonly url = input.required<string>();
  public readonly target = computed<string>(() => (this.newTab ? '_blank' : '_self'));
  public readonly rel = computed<string>(() => (this.newTab ? 'noopener noreferrer' : ''));

  public newTab: boolean = false;
}
