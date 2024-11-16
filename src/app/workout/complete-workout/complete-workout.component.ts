import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Workout } from '../../models/workout.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete-workout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './complete-workout.component.html',
  styleUrl: './complete-workout.component.scss',
})
export class CompleteWorkoutComponent {
  @Input() workout?: Workout;
  confirm = false;
  constructor(private router: Router) {}

  submit() {
    this.router.navigate(['']);
  }
}
