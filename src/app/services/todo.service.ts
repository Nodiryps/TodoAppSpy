import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Todo } from '../models/Todo';

@Injectable()
export class TodoService {

    constructor(private http: HttpClient) { }

    getTodos() {
        return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');
    }
}
