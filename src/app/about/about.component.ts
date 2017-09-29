import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public todos: Todo[];

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.route.data
      .subscribe((data: {todos: Todo[]}) => this.todos = data.todos);
  }
}
