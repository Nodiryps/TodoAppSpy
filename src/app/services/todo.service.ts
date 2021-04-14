import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry, filter, map } from 'rxjs/operators';

import { Todo } from '../models/Todo';

@Injectable()
export class TodoService {
    public todoList: Todo[] = [];
    private todoUrl = 'https://jsonplaceholder.typicode.com/todos';

    constructor(private http: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(`${this.todoUrl}?_start=0&_limit=10`)
            .pipe(catchError(err => of([])));
    }

    addNewTodo(todo: Todo): Observable<boolean> {
        return this.http.post<Todo>(`${this.todoUrl}`, todo)
            .pipe(map(res => true), catchError(err => of(false)));
    }
}
