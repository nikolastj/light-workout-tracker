import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  startWorkout() {
    const workoutId = this.generateWorkoutId();
    this.router.navigate([`/workout/${workoutId}`]);
  }

  // Example function to generate a workout ID
  private generateWorkoutId(): string {
    return '12345'; // Replace with your actual ID generation logic
  }
}
