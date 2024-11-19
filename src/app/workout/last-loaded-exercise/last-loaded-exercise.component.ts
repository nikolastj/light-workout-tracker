import { Component, Input, OnInit } from '@angular/core';
import { WorkoutStateService } from '../workout-state.service';
import { Exercise } from '../../models/exercise.model';
import { Workout } from '../../models/workout.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-loaded-exercise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './last-loaded-exercise.component.html',
  styleUrl: './last-loaded-exercise.component.scss',
})
export class LastLoadedExerciseComponent implements OnInit {
  @Input() exerciseName?: string;
  exercise?: Exercise;
  workout?: Workout;
  constructor(private state: WorkoutStateService) {}

  ngOnInit(): void {
    const workouts = this.state.getAllWorkouts();
    workouts.pop();
    workouts.reverse();
    this.workout = workouts.find((w) =>
      w.exercises.find((e) => e.name === this.exerciseName)
    );
    this.exercise = this.workout?.exercises.find(
      (e) => e.name === this.exerciseName
    );

    console.log(this.exercise, this.workout);
  }
}
