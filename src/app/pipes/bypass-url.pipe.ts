import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'bypassUrl',
  standalone: true
})
export class BypassUrlPipe implements PipeTransform {
  private readonly sanitizer = inject(DomSanitizer);

  public transform(value: string, type: 'url' | 'html'): SafeUrl {
    switch (type) {
      case 'url':
        return this.sanitizer.bypassSecurityTrustUrl(value);
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      default:
        throw new Error('bypass url - type missing!');
    }
  }
}
