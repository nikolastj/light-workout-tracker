import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetControlsComponent } from './set-controls.component';

describe('SetControlsComponent', () => {
  let component: SetControlsComponent;
  let fixture: ComponentFixture<SetControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SetControlsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
