import { Set } from './set.model';

export class Exercise {
  id: string;
  name: string;
  sets: Set[];

  constructor(id: string, name: string, sets: Set[]) {
    this.id = id;
    this.name = name;
    this.sets = sets;
  }
}
