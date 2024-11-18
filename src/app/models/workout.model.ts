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
    // const hours = String(this.dateCreated.getHours()).padStart(2, '0');
    // const minutes = String(this.dateCreated.getMinutes()).padStart(2, '0');
    // const seconds = String(this.dateCreated.getSeconds()).padStart(2, '0');

    return `${year}${month}${day}`; //${hours}${minutes}${seconds}
  }
}
