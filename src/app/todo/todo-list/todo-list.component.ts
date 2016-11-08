import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-list',
  // styleUrls: [ './todo.component.css' ],
  templateUrl: './todo-list.component.html',
  providers: [TodoService]
})
export class TodoListComponent {
  todos: Todo[];
  constructor(private todoService: TodoService) {

  }
  get sortedTodos(): Todo[] {
    return this.todoService.getTodos()
    .sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
    .sort((a, b) => {
      if (a.done && !b.done) return 1;
      if (!a.done && b.done) return -1;
      return 0;
    })
  }
}
