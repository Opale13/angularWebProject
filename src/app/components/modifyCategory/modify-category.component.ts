import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service'
import { Category } from 'src/app/classes/category';


@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.component.html',
  styleUrls: ['./modify-category.component.css']
})
/**
* Component to modify a category
*/
export class ModifyCategoryComponent implements OnInit {
  category: Category;

  /**
  * Construct the component
  *
  * @param {ActivatedRoute} route
  * @param {Router} router
  * @param {CategoryService} categoryService
  */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) { }

  /** Recover one category to display */
  ngOnInit() {
    this.getCategory();
  }

  /** Recover the category to display with the id in URL */
  getCategory() {
    let id = this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategory(id).subscribe(
      (data) => {
        this.category = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /** Confirm the modification */
  onSubmit() {
    if (this.category.title.length !== 0 && this.category.description.length !== 0) {
      this.categoryService.putCategory(this.category.id, this.category).subscribe(
        (data) => {
          if (data.valid === true) {
            this.router.navigate(['/categories']);
          } else { document.getElementById('send-error').style.display = "block"; }
        }
      );
    } else { document.getElementById('form-error').style.display = "block"; }
  }
}
