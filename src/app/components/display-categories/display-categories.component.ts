import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-display-categories',
  templateUrl: './display-categories.component.html',
  styleUrls: ['./display-categories.component.css']
})
export class DisplayCategoriesComponent implements OnInit {
  private url = "http://localhost/webProject/public/index.php/api";
  categories: Category[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCategories();
  }

  getServiceCatergories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url + '/categories', { responseType: 'json' });
  }

  getCategories() {
    this.getServiceCatergories().subscribe(
      (data) => {
        this.categories = data.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
