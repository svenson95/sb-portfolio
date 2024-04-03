import { Pipe, PipeTransform } from '@angular/core';

import { ImageUrl } from '../../models';

@Pipe({
  name: 'thumbnail',
  standalone: true,
  pure: true
})
export class ThumbnailPipe implements PipeTransform {
  public transform(value: ImageUrl | undefined): string {
    if (value === undefined) throw new Error('ThumbnailPipe value is undefined');
    const idx = value.lastIndexOf('.');
    return value.slice(0, idx) + '-thumbnail' + value.slice(idx);
  }
}
