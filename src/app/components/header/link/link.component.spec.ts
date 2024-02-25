import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLinkComponent } from './link.component';

describe('HeaderLinkComponent', () => {
  let component: HeaderLinkComponent;
  let fixture: ComponentFixture<HeaderLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HeaderLinkComponent]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
