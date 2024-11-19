import { Injectable } from '@angular/core';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root',
})
export class WorkoutStateService {
  private readonly localStorageKey = 'workouts';

  get workout(): Workout {
    const todayWorkoutId = new Workout().id;
    let existingWorkout = this.getWorkoutById(todayWorkoutId);

    if (!existingWorkout) {
      // Create a new workout if not found
      existingWorkout = new Workout();
      this.saveWorkout(existingWorkout);
    }

    return existingWorkout;
  }

  private getWorkoutById(workoutId: string): Workout | undefined {
    const workouts = this.getAllWorkouts();
    return workouts.find((workout) => workout.id === workoutId);
  }

  getAllWorkouts(): Workout[] {
    const storedWorkouts = localStorage.getItem(this.localStorageKey);
    return storedWorkouts ? JSON.parse(storedWorkouts) : [];
  }

  private saveWorkout(newWorkout: Workout): void {
    const workouts = this.getAllWorkouts();
    workouts.push(newWorkout);
    this.saveAllWorkouts(workouts);
  }

  updateWorkout(updatedWorkout: Workout): void {
    const workouts = this.getAllWorkouts();
    const updatedWorkouts = workouts.map((workout) =>
      workout.id === updatedWorkout.id ? updatedWorkout : workout
    );
    this.saveAllWorkouts(updatedWorkouts);
  }

  private saveAllWorkouts(workouts: Workout[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(workouts));
  }
}
