import { outputAst } from '@angular/compiler';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor() {
    this.todo = new Todo(0, '', '', false); // Assign a new instance of Todo to the todo property
  }
onClick(todo : Todo){
  this.todoDelete.emit(todo);
  console.log("onclick triggered");
}
}
