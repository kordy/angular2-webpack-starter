import { Component } from '@angular/core';

import { AppState } from '../app.service';

@Component({
  selector: 'todo',  // <todo></todo>
  styleUrls: [ './todo.component.css' ],
  templateUrl: './todo.component.html'
})
export class TodoComponent {

  public items: string[];
  public newItem: string;

  constructor() {
    this.items = [
      'task 1', 'task 2', 'task 3'
    ];
  }

  addItem(value) {
    console.log('add ' + value);
    this.items.push(value);
  }

  ngOnInit() {
    console.log('hello `todo` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
