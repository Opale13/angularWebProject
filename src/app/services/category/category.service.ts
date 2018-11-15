import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from 'src/app/classes/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = "http://localhost/webProject/public/index.php/api";

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + '/categories', { responseType: 'json' });
  }
}
