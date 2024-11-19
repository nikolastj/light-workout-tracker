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
    if (!this.workout) return;
    navigator.clipboard
      .writeText(Workout.toString(this.workout))
      .then(() => {
        console.log('Copied to clipboard successfully!');
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  }

  //not used
  copyWorkoutToClipboard(workout: Workout): ClipboardItem[] {
    const dateFormatted = new Intl.DateTimeFormat('en-GB').format(
      new Date(workout.dateCreated)
    );

    let formattedContent = `<u>${dateFormatted}</u><br><br>`;

    workout.exercises.forEach((exercise, index) => {
      formattedContent += `<b>${index + 1}. ${exercise.name}</b><br>`;

      const setsFormatted = exercise.sets
        .map((set) => `${set.weight}x${set.reps}`)
        .join(' | ');

      formattedContent += `${setsFormatted}<br><br>`;
    });

    const blob = new Blob([formattedContent], { type: 'text/html' });
    const clipboardItem = new ClipboardItem({ 'text/html': blob });

    return [clipboardItem];
  }
}
