import { Injectable, Inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpTransferService } from '@ngx-universal/state-transfer';

import { environment } from '../../environments/environment';
import { Post } from '../shared/post.model';

@Injectable()
export class PostResolver implements Resolve<Post[]> {

  constructor(private http: HttpTransferService) { }

  public resolve(): Observable<Post[]> {
    return this.http.get(environment.apiUrl);
  }
}
