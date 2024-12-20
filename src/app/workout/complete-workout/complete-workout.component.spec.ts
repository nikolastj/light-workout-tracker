import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteWorkoutComponent } from './complete-workout.component';

describe('CompleteWorkoutComponent', () => {
  let component: CompleteWorkoutComponent;
  let fixture: ComponentFixture<CompleteWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompleteWorkoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompleteWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
