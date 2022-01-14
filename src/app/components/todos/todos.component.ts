import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';
import { GitHubService } from 'src/app/service/github.service';
import { Repos } from '../../models/repos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] | undefined;
  inputTodo: string = '';

  userName: string = 'markuz899';
  repos: Repos[] = [];
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private githubService: GitHubService) {}

  getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getRepos(this.userName).subscribe(
      (response) => {
        //next() callback
        console.log('response received');
        this.repos = response;
      },
      (error) => {
        //error() callback
        console.error('Request failed with error');
        this.errorMessage = error;
        this.loading = false;
      },
      () => {
        //complete() callback
        console.error('Request completed'); //This is actually not needed
        this.loading = false;
      }
    );
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false,
      },
      {
        content: 'Second todo',
        completed: false,
      },
    ];
  }

  toggleDone(id: number) {
    this.todos?.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos?.filter((v, i) => i !== id);
  }

  addTodo() {
    if (this.inputTodo !== '') {
      this.todos?.push({
        content: this.inputTodo,
        completed: false,
      });
      this.inputTodo = '';
    }
  }
}
