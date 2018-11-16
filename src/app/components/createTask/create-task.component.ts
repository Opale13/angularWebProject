import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task/task.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/classes/category';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  newTask: Task;
  categories: Category[];

  constructor(private router: Router,
              private taskService: TaskService,
              private categoryService: CategoryService) { this.newTask = new Task(); }

  ngOnInit() {
    this.getCategories();
  }

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

  onSubmit() {
    let newTask = {
      'title': this.newTask.title,
      'description': this.newTask.description,
      'fkCategory': this.newTask.fkCategory.id,
      'fkState': 3
    };

    this.taskService.postTask(newTask).subscribe(
      (data) => {
        if (data.valid === true) {
          this.router.navigate(['/tasks']);
        }
        else { console.log("error"); }
      }
    );
  }

}
