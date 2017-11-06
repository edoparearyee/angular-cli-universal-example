import { Injectable, Inject } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

const postsKey = makeStateKey('posts');

import { environment } from '../../environments/environment';
import { Post } from '../shared/post.model';

@Injectable()
export class PostResolver implements Resolve<Post[]> {

  constructor(private http: HttpClient, private state: TransferState) { }

  public resolve(): Observable<Post[]> {
    const stateData = this.state.get(postsKey, null as any);

    if (stateData) {
      return Observable.of(stateData);
    }

    return this.http.get<Post[]>(environment.apiUrl)
      .do((posts) => this.state.set(postsKey, posts as any))
      .catch((err) => Observable.of([]));
  }
}
