import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
/**
* Composant for creating a category
*/
export class CreateCategoryComponent implements OnInit {
  newCategory: Category;

  constructor(private router: Router,
              private categoryService: CategoryService) {
    this.newCategory = new Category();
  }

  ngOnInit() {
  }

  /** Function activates by submit button */
  onSubmit() {

    /* Check in first if the object are not undefined */
    if (this.newCategory.title !== undefined && this.newCategory.description !== undefined) {

      /* In second, we check if the fields are a good format*/
      if (this.newCategory.title.length !== 0 && this.newCategory.description.length !== 0) {
        this.categoryService.postCategory(this.newCategory).subscribe(
          (data) => {
            if (data.valid == true) {
              this.router.navigate(['/categories']);
            }
            else { document.getElementById('send-error').style.display = "block"; }
          }
        );
      } else { document.getElementById('form-error').style.display = "block"; }
    } else { document.getElementById('form-error').style.display = "block"; }
  }

}
