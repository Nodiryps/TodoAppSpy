import { Component, OnInit } from '@angular/core';

import { TodoService } from '../services/todo.service';

import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent implements OnInit {

  todoList: Todo[];

  constructor(
    private todoService: TodoService) {
    this.todoList = [];
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getTodos().subscribe(td => this.todoList = td);
  }

}
