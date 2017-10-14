import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpTransferService } from '@ngx-universal/state-transfer';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { Post } from '../shared/post.model';

@Injectable()
export class PostResolver implements Resolve<Post[]> {

  constructor(private http: HttpTransferService) { }

  public resolve(): Observable<Post[]> {
    return this.http.get(environment.apiUrl)
      .catch(err => Observable.of([]));
  }
}
