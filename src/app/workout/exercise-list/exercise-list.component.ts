import { Component, Input, output } from '@angular/core';
import { Workout } from '../../models/workout.model';
import { CommonModule } from '@angular/common';
import { Exercise } from '../../models/exercise.model';

@Component({
  selector: 'app-exercise-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exercise-list.component.html',
  styleUrl: './exercise-list.component.scss',
})
export class ExerciseListComponent {
  @Input() workout?: Workout;
  loadExercise = output<Exercise>();
}
