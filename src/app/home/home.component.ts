import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutStateService } from '../workout/workout-state.service';
import { Workout } from '../models/workout.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router, private state: WorkoutStateService) {}

  startWorkout() {
    this.router.navigate([`/workout`]);
  }

  copyAll() {
    const workouts = this.state.getAllWorkouts();
    const clipboardValue = workouts
      .map((item) => `${Workout.toString(item)}\n\n`)
      .join(' ');

    navigator.clipboard
      .writeText(clipboardValue)
      .then(() => {
        console.log('Copied to clipboard successfully!');
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  }
}
