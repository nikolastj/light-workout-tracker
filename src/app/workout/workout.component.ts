import { Component } from '@angular/core';
import { Workout } from '../models/workout.model';
import { CommonModule } from '@angular/common';
import { Exercises } from '../data/exercises.data';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Set } from '../models/set.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Exercise } from '../models/exercise.model';
import { ExerciseListComponent } from './exercise-list/exercise-list.component';
import { CompleteWorkoutComponent } from './complete-workout/complete-workout.component';

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
  ],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
})
export class WorkoutComponent {
  workout = {
    dateCreated: '2024-11-16T18:51:36.196Z',
    id: '20241116195136',
    exercises: [
      {
        id: 'Hip Thrust',
        name: 'Hip Thrust',
        sets: [
          {
            reps: 12,
            weight: 32,
          },
          {
            reps: 12,
            weight: 32,
          },
        ],
      },
      {
        id: 'Chest Press',
        name: 'Chest Press',
        sets: [
          {
            reps: 10,
            weight: 30,
          },
          {
            reps: 10,
            weight: 30,
          },
          {
            reps: 10,
            weight: 30,
          },
          {
            reps: 10,
            weight: 30,
          },
        ],
      },
    ],
  } as any as Workout;
  hideButton = true; //false;
  currentExerciseName?: string; //= 'Hip Thrust';
  currentSetWeight = 30;
  reps = 10;
  exerciseList = Exercises;
  currentSetList: Set[] = [];

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
  }

  incrementWeight(amount: number) {
    this.currentSetWeight += amount;
  }

  incrementReps(amount: number) {
    this.reps += amount;
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
  }

  completeExercise() {
    delete this.currentExerciseName;
    console.log(this.workout);
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

  get lastSet(): Set | null {
    const exercise = this.workout.exercises.find(
      (exc) => exc.name === this.currentExerciseName
    );
    if (!exercise) return null;
    return exercise.sets[exercise.sets.length - 1];
  }

  addComment() {
    console.log('not implemented');
  }
}
