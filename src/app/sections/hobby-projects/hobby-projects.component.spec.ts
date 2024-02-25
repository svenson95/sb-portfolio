import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyProjectsComponent } from './hobby-projects.component';

describe('HobbyProjectsComponent', () => {
  let component: HobbyProjectsComponent;
  let fixture: ComponentFixture<HobbyProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HobbyProjectsComponent]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
