import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category/category.service'

@Component({
  selector: 'app-display-categories',
  templateUrl: './display-categories.component.html',
  styleUrls: ['./display-categories.component.css']
})
/**
* Component to display categories
*/
export class DisplayCategoriesComponent implements OnInit {
  show: boolean = false;
  categories: Category[];

  /**
  * Construct the component
  *
  * @param {CategoryService} categoryService
  * @param {Router} router
  */
  constructor(private categoryService: CategoryService,
              private router: Router) { }

  /** Recover the categories to display */
  ngOnInit() {
    this.getCategories();
  }

  /** Recover the categories */
  getCategories() {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /** Display the selector to confirm the deletion */
  showAlert(id) {
    let display = document.getElementById(id).style.display;

    if (display == "block") { document.getElementById(id).style.display = "none"; }
    else { document.getElementById(id).style.display = "block"; }
  }

  /** Delete the category into database */
  deleteCategory(id) {
    this.show = false;
    this.categoryService.deleteCategory(id).subscribe(
      (data) => {
        if (data.valid == true) {
          /* Remove the category into table categories */
          let i=0;
          for (i; i<this.categories.length; i++) {
            if (this.categories[i].id == id) {
              this.categories.splice(i, 1);
            }
          }
          this.router.navigate(['/categories']);
        }
        else{ console.log("error"); }
      }
    );
  }
}
