import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Task } from 'src/app/classes/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = "http://localhost/webProject/public/index.php/api";

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + '/tasks', { responseType: 'json' });
  }

  getTask(id: string): Observable<Task> {
    return this.http.get<Task>(this.url + '/task/' + id, { responseType: 'json' });
  }

  putTask(id: number, task): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.url + '/modifyTask/' + id, task, httpOptions)
  }
}
