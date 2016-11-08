import { Injectable } from '@angular/core';
import { ITodo } from './todo.model';
import { Todo } from './todo.model';
import { todos } from './todo.data';

@Injectable()
export class TodoService {
  private todos: Todo[];

  constructor() {
    this.todos = todos;
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  changeDone(item: Todo) {
    item.done = !item.done;
  }

  addTodo(value: string) {
    this.todos.push(new Todo(value, false));
  }

  removeTodo(item: Todo) {
    let index = this.todos.findIndex((todo) => todo === item);
    if (index > -1) {
      this.todos = this.todos.splice(index, 1);
    }
  }
}
