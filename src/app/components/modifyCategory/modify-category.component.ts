import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service'
import { Category } from 'src/app/classes/category';


@Component({
  selector: 'app-modify-category',
  templateUrl: './modify-category.component.html',
  styleUrls: ['./modify-category.component.css']
})
export class ModifyCategoryComponent implements OnInit {
  category: Category;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategory();
  }

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
