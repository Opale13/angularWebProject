import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs';
import { Category } from 'src/app/classes/category';

@Injectable({
  providedIn: 'root'
})
/**
* Category service
*/
export class CategoryService {
  private url = "http://localhost/webProject/public/index.php/api";

  /**
  * Construct the service
  *
  * @param {HttpClient} http
  */
  constructor(private http: HttpClient) { }

  /**
  * Recover the categories
  *
  * @returns {Observable<Category[]>}
  */
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + '/categories', { responseType: 'json' });
  }

  /**
  * Recover a category
  *
  * @param {string} id
  * @returns {Observable<Category>}
  */
  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(this.url + '/category/' + id, { responseType: 'json' });
  }

  /**
  * Modify a category
  *
  * @param {number} id
  * @param {Category} category
  * @returns {Observable<any>}
  */
  putCategory(id: number, category: Category): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.url + '/modifyCategory/' + id, category, httpOptions)
  }

  /**
  * Create a category
  *
  * @param {Category} category
  * @returns {Observable<any>}
  */
  postCategory(category: Category): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Category>(this.url + '/createCategory', category, httpOptions);
  }

  /**
  * Delete a category
  *
  * @param {string} id
  * @returns {Observable<any>}
  */
  deleteCategory(id: string): Observable<any> {
    return this.http.delete(this.url +  '/deleteCategory/' + id)
  }
}
