import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/classes/task';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/classes/category';
import { State } from 'src/app/classes/state';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})
export class ModifyTaskComponent implements OnInit {
  task: Task;
  categories: Category[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.getTask();
    this.getCategories();
  }

  getTask() {
    let id = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe(
      (data) => {
        this.task = data;
      },
      (err) => {
        console.log(err);
      }
    );
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
      'title': this.task.title,
      'description': this.task.description,
      'fkCategory': this.task.fkCategory.id,
      'fkState': this.task.fkState.id
    };

    this.taskService.putTask(this.task.id, newTask).subscribe(
      (data) => {
        this.router.navigate(['/tasks']);
      }
    );
  }
}
