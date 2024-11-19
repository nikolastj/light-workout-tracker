import { Exercise } from './exercise.model';

export class Workout {
  id: string;
  dateCreated: Date;
  exercises: Exercise[];

  constructor() {
    this.dateCreated = new Date();
    this.id = this.generateId();
    this.exercises = [];
  }

  private generateId(): string {
    const year = this.dateCreated.getFullYear();
    const month = String(this.dateCreated.getMonth() + 1).padStart(2, '0');
    const day = String(this.dateCreated.getDate()).padStart(2, '0');

    return `${year}${month}${day}`;
  }

  static toString(workout:Workout): string {
    let formattedContent = new Intl.DateTimeFormat('en-GB').format(
      new Date(workout.dateCreated)
    );
    formattedContent = `${formattedContent}\n\n`;
    workout.exercises.forEach((exercise, index) => {
      formattedContent += `${index + 1}. ${exercise.name}\n`;

      const setsFormatted = exercise.sets
        .map((set) => `   ${set.weight}x${set.reps}`)
        .join(' | ');

      formattedContent += `${setsFormatted}\n\n`;
    });

    return formattedContent;
  }
}
