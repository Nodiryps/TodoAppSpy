import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TodoService } from '../services/todo.service';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})


export class TodoAddComponent implements OnInit {
  public newTodoTitle = new FormControl('');
  todoList: Todo[] = [];
  frmGrp: FormGroup = this.fb.group({});

  constructor(private todoService: TodoService, private fb: FormBuilder) { }

  ngOnInit() {
    this.newTodoTitle = this.fb.control('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(100),
    ]);

    this.frmGrp = this.fb.group({
      title: this.newTodoTitle
    });
  }

  addNewTodo() {
    if (!this.newTodoTitle.pristine && this.newTodoTitle.value !== ' ') {
      const todo = new Todo(1, 201, this.newTodoTitle.value, false);

      this.todoService.addNewTodo(todo).subscribe(() => {
        this.todoService.getTodos().subscribe(td => {
          this.todoList = td;
        });
        this.todoService.todoList = [...this.todoList, todo];
        this.newTodoTitle.setValue('');
      });
    }
  }

}
