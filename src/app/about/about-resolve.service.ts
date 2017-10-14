import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpTransferService } from '@ngx-universal/state-transfer';

import { Todo } from '../shared/todo.model';

@Injectable()
export class TodoResolver implements Resolve<Todo> {

  private apiUrl = '/assets/data/todos.json';

  constructor(private http: HttpTransferService) { }

  public resolve(): Observable<Todo> {
    return this.http.get(this.apiUrl);
  }
}
