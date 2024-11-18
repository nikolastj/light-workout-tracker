import { CommonModule } from '@angular/common';
import { Component, Input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Workout } from '../../models/workout.model';
import { Set } from '../../models/set.model';
import { Exercise } from '../../models/exercise.model';
import { WorkoutStateService } from '../workout-state.service';

@Component({
  selector: 'app-set-controls',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './set-controls.component.html',
  styleUrl: './set-controls.component.scss',
})
export class SetControlsComponent {
  @Input() workout!: Workout;
  @Input() currentExerciseName?: string;
  onComplete = output<null>();

  currentSetWeight = 30;
  reps = 10;

  constructor(private state: WorkoutStateService) {}

  incrementWeight(amount: number) {
    this.currentSetWeight += amount;
  }

  incrementReps(amount: number) {
    this.reps += amount;
  }

  get lastSet(): Set | null {
    const exercise = this.workout.exercises.find(
      (exc) => exc.name === this.currentExerciseName
    );
    if (!exercise) return null;
    return exercise.sets[exercise.sets.length - 1];
  }

  get setNumber(): number {
    const exercise = this.workout.exercises.find(
      (exc) => exc.name === this.currentExerciseName
    );
    const sets = (exercise?.sets?.length ?? 0) + 1;
    return sets;
  }

  getSuffix(number: number): string {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const value = number % 100;
    return suffixes[(value - 20) % 10] || suffixes[value] || suffixes[0];
  }

  get currentExercise(): Exercise | null {
    const exercise = this.workout.exercises.find(
      (exc) => exc.name === this.currentExerciseName
    );
    if (!exercise) return null;
    return exercise;
  }

  addSet() {
    if (!this.currentExerciseName) {
      return;
    }

    const newSet: Set = {
      reps: this.reps,
      weight: this.currentSetWeight,
    };

    let exercise = this.workout.exercises.find(
      (ex) => ex.name === this.currentExerciseName
    );

    if (!exercise) {
      exercise = {
        id: this.currentExerciseName,
        name: this.currentExerciseName,
        sets: [],
      };
      this.workout.exercises.push(exercise);
    }

    exercise.sets.push(newSet);
    console.log(this.workout);
    this.state.updateWorkout(this.workout);
  }

  completeExercise() {
    this.state.updateWorkout(this.workout);
    this.onComplete.emit(null);
    console.log(this.workout);
  }

  addComment() {
    console.log('not implemented');
  }
}
