import { Component, OnInit } from '@angular/core';

import { TodoService } from '../services/todo.service';

import { Todo } from '../models/Todo';
import { filter } from 'rxjs/operators';

import * as _ from 'lodash';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {

  todoList: Todo[];
  toggleClicked: boolean;

  constructor(
    private todoService: TodoService) {
    this.todoList = this.todoService.todoList;
    this.toggleClicked = false;
  }

  ngOnInit(): void {
    this.getTodos();
  }

  filterCompleted() {
    this.toggleClicked = !this.toggleClicked;
    if (this.toggleClicked) {
      this.todoList = _.filter(this.todoList, td => td.completed);
    } else {
      return this.getTodos();
    }
  }

  getTodos() {
    this.todoService.getTodos().subscribe(td => this.todoList = td);
  }

}
