import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ImageSource, ImageTitle } from '../../models';

@Component({
  selector: 'sb-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, MatIconModule],
  styles: ``,
  template: ` <img [ngSrc]="source()" [alt]="title()" [title]="title()" priority width="50" height="50" /> `
})
export class ImageComponent {
  source = input.required<ImageSource>();
  title = input.required<ImageTitle>();
}
