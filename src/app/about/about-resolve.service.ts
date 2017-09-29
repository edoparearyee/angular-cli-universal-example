import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Todo } from '../shared/todo.model';

@Injectable()
export class TodoResolver implements Resolve<Todo> {

  public apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  public resolve(): Observable<Todo> {
    return this.http.get<Todo>(this.apiUrl);
  }
}
