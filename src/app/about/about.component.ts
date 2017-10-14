import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Post } from '../shared/post.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public posts$: Observable<Post[]>;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.posts$ = this.route.data
      .map((data: {posts: Post[]}) => data.posts);
  }
}
