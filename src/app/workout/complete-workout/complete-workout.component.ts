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
      .write(this.copyWorkoutToClipboard(this.workout))
      .then(() => {
        console.log('Copied to clipboard successfully!');
        this.router.navigate(['']);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  }

  copyWorkoutToClipboard(workout: Workout): ClipboardItem[] {
    const dateFormatted = new Intl.DateTimeFormat('en-GB').format(
      new Date(workout.dateCreated)
    );

    // Start with the formatted date (underlined)
    let formattedContent = `<u>${dateFormatted}</u><br><br>`;

    workout.exercises.forEach((exercise, index) => {
      // Add exercise name in bold
      formattedContent += `<b>${index + 1}. ${exercise.name}</b><br>`;

      // Format sets as "kgxreps | kgxreps"
      const setsFormatted = exercise.sets
        .map((set) => `${set.weight}x${set.reps}`)
        .join(' | ');

      formattedContent += `${setsFormatted}<br><br>`;
    });

    // Use Clipboard API with rich text
    const blob = new Blob([formattedContent], { type: 'text/html' });
    const clipboardItem = new ClipboardItem({ 'text/html': blob });

    return [clipboardItem];
  }
}
