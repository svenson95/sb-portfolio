import { Directive, ElementRef, Input, OnDestroy, OnInit, inject } from '@angular/core';

import { ScrollManagerDirective } from './scroll-manager.directive';

@Directive({
  selector: '[sbScrollSection]',
  standalone: true
})
export class ScrollSectionDirective implements OnInit, OnDestroy {
  private readonly manager = inject(ScrollManagerDirective, { skipSelf: true });
  private readonly host = inject(ElementRef<HTMLElement>);

  @Input('sbScrollSection') id!: string;

  public ngOnInit(): void {
    this.manager.register(this);
  }

  public ngOnDestroy(): void {
    this.manager.remove(this);
  }

  public scrollIntoView(): void {
    this.host.nativeElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}
