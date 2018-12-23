import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Task } from 'src/app/classes/task';

@Injectable({
  providedIn: 'root'
})
/**
* Task service
*/
export class TaskService {
  private url = "http://localhost/webProject/public/index.php/api";

  /**
  * Construct the service
  *
  * @param {HttpClient} http
  */
  constructor(private http: HttpClient) { }

  /**
  * Recover the tasks
  *
  * @returns {Observable<Task[]>}
  */
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url + '/tasks', { responseType: 'json' });
  }

  /**
  * Recover a task
  *
  * @param {string} id
  * @returns {Observable<Task>}
  */
  getTask(id: string): Observable<Task> {
    return this.http.get<Task>(this.url + '/task/' + id, { responseType: 'json' });
  }

  /**
  * Modify a task
  *
  * @param {number} id
  * @param {} task
  * @returns {Observable<any>}
  */
  putTask(id: number, task): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.url + '/modifyTask/' + id, task, httpOptions)
  }

  /**
  * Create a task
  *
  * @param {} task
  * @returns {Observable<any>}
  */
  postTask(task): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Task>(this.url + '/createTask', task, httpOptions);
  }

  /**
  * Delete a task
  *
  * @param {string} id
  * @returns {Observable<any>}
  */
  deleteTask(id: string): Observable<any> {
    return this.http.delete(this.url +  '/deleteTask/' + id)
  }
}
