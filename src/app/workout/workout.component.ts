import { Component } from '@angular/core';
import { Workout } from '../models/workout.model';
import { CommonModule } from '@angular/common';
import { Exercises } from '../data/exercises.data';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-workout',
  standalone: true,
  imports: [CommonModule, NgSelectModule, FormsModule],
  templateUrl: './workout.component.html',
  styleUrl: './workout.component.scss',
})
export class WorkoutComponent {
  workout = new Workout();
  hideButton = false;
  currentExerciseName?: string;
  exerciseList = Exercises;
  addExercise() {
    this.hideButton = true;
  }

  clearExercise() {
    this.hideButton = false;
    delete this.currentExerciseName;
  }
}
