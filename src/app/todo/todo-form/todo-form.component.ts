import { Component } from '@angular/core';

import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-form',
  // styleUrls: [ './todo.component.css' ],
  templateUrl: './todo-form.component.html',
  providers: [TodoService]
})
export class TodoFormComponent {

  constructor(private todoService: TodoService) {

  }

  addItem(value) {
     this.todoService.addTodo(value);
  }
}
