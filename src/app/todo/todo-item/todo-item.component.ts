import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'todo-item',  // <todo-item></todo-item>
  styleUrls: [ './todo-item.component.css' ],
  templateUrl: './todo-item.component.html',
  providers: [TodoService]
})

export class TodoItemComponent {
  @Input() todo: Todo

  constructor(private todoService: TodoService) {

  }

  changeChecked(item) {
    this.todoService.changeDone(this.todo);
  }

  removeItem(item) {
    this.todoService.removeTodo(item);
  }
}
