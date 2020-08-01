import { Injectable } from '@angular/core';
import { getLocaleExtraDayPeriods } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL:string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit:string = '?_limit=5';

  constructor(private http:HttpClient) { }

  // get todos from server
  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosURL}${this.todosLimit}`);
  }

  // update todo on server
  toggleCompleted(todo: Todo):Observable<any> {
    const url:string = `${this.todosURL}/${todo.id}`

    return this.http.put(url, todo, httpOptions);
  }

  // delete todo on server
  deleteTodo(todo:Todo):Observable<Todo> {
    const url:string = `${this.todosURL}/${todo.id}`

    return this.http.delete<Todo>(url,httpOptions);
  }

  addTodo(todo:Todo):Observable<Todo> {
    // all added todos have the same id of 201
    return this.http.post<Todo>(this.todosURL, todo, httpOptions)
  }
}
