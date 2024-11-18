import { Component } from '@angular/core';
import { Workout } from '../models/workout.model';
import { CommonModule } from '@angular/common';
import { Exercises } from '../data/exercises.data';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Exercise } from '../models/exercise.model';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { CompleteWorkoutComponent } from './complete-workout/complete-workout.component';
import { SetControlsComponent } from './set-controls/set-controls.component';
import { WorkoutStateService } from './workout-state.service';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [
    CommonModule,
    NgSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ExerciseListComponent,
    CompleteWorkoutComponent,
    SetControlsComponent,
  ],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
})
export class WorkoutComponent {
  workout = this.state.workout;
  hideButton = true;
  currentExerciseName?: string;
  exerciseList = Exercises;

  constructor(private state: WorkoutStateService) {}

  addExercise() {
    this.hideButton = true;
  }

  clearLastSetOrExercise() {
    if (this.currentExercise?.sets.length) {
      this.currentExercise.sets.pop();
    } else {
      if (this.currentExercise) {
        this.workout.exercises.pop();
      }
      this.hideButton = false;
      delete this.currentExerciseName;
    }
    this.state.updateWorkout(this.workout);
  }

  get currentExercise(): Exercise | null {
    const exercise = this.workout.exercises.find(
      (exc) => exc.name === this.currentExerciseName
    );
    if (!exercise) return null;
    return exercise;
  }

  loadExercise(exercise: Exercise) {
    this.currentExerciseName = exercise.name;
  }

  completeExercise() {
    delete this.currentExerciseName;
  }
}
