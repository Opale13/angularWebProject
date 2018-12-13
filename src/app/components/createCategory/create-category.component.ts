import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category/category.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  newCategory: Category;

  constructor(private router: Router,
              private categoryService: CategoryService) { 
    this.newCategory = new Category();
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.newCategory.title !== undefined && this.newCategory.description !== undefined) {
      if (this.newCategory.title.length == 0 && this.newCategory.description.length != 0) {
        this.categoryService.postCategory(this.newCategory).subscribe(
          (data) => {
            if (data.valid == true) {
              this.router.navigate(['/categories']);
            }
            else {
              console.log("error");
            }
          }
        );
      } else {
        document.getElementById('form-error').style.display = "block";
      }
    } else {
      document.getElementById('form-error').style.display = "block";
    }
  }

}
