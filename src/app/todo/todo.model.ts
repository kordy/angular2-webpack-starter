export interface ITodo {
  name: string;
  done: boolean;
}

export class Todo implements ITodo{
  name: string;
  done: boolean;

  constructor(name: string, done: boolean) {
    this.name = name || '';
    this.done = done || false;
  }
}
