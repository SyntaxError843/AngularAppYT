import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';
import { AddTodoComponent } from '../forms/add-todo/add-todo.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];

  public getTodosLen():number {return this.todos.length}

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    //console.log('delete me');

    // delete from UI
    this.todos = this.todos.filter(t => t.id !== todo.id)

    // delete on server
    this.todoService.deleteTodo(todo).subscribe(() => {
      console.log('todo no. ' + todo.id  + ' deleted from server')
    });
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(t => {
      this.todos.push(t);
      console.log(t);
    })
  }

}
