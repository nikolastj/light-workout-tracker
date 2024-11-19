import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastLoadedExerciseComponent } from './last-loaded-exercise.component';

describe('LastLoadedExerciseComponent', () => {
  let component: LastLoadedExerciseComponent;
  let fixture: ComponentFixture<LastLoadedExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastLoadedExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastLoadedExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
