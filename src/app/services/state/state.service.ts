import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { State } from 'src/app/classes/state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
* State service
*/
export class StateService {
  private url = "http://localhost/webProject/public/index.php/api";

  /**
  * Construct the service
  *
  * @param {HttpClient} http
  */
  constructor(private http: HttpClient) { }

  /**
  * Recover the states
  *
  * @returns {Observable<State[]>}
  */
  getStates(): Observable<State[]> {
    return this.http.get<State[]>(this.url + '/states', { responseType: 'json' });
  }
}
