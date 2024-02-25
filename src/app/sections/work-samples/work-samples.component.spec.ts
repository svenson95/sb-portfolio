import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSamplesComponent } from './work-samples.component';

describe('WorkExamplesComponent', () => {
  let component: WorkSamplesComponent;
  let fixture: ComponentFixture<WorkSamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WorkSamplesComponent]
}).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkSamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
