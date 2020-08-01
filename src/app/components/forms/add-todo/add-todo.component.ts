import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TodosComponent } from '../../todos/todos.component'
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo:EventEmitter<Todo> = new EventEmitter();
  
  title:string;

  constructor(private todos:TodosComponent) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      id: this.todos.getTodosLen() + 1,
      title: this.title,
      completed: false
    }

    this.addTodo.emit(todo);
  }
}
