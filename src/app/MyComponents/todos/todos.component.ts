import { Component } from '@angular/core';
import {Todo} from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todos: Todo[];
  constructor() {
    this.todos = [];
this.todos.push( {
      sno:  1,
      title: "Vrindavan",
      desc: "Divine beauty",
      active: true
    },
    {
      sno:  2,
      title: "Rishikesh",
      desc: "nature's aroma",
      active: true
    }
    ,
    {
      sno:  3,
      title: "Ayodhya",
      desc: "Power of Truth",
      active: true
    })
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
  }

}
