import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task/task.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/classes/category';
import { State } from 'src/app/classes/state';
import { HttpClient } from '@angular/common/http';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  newTask: Task;
  categories: Category[];
  states: State[];

  constructor(private router: Router,
              private taskService: TaskService,
              private categoryService: CategoryService,
              private stateService: StateService,
              private http: HttpClient) { this.newTask = new Task(); }

  ngOnInit() {
    this.getCategories();
    this.getStates();
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
      'fkState': this.newTask.fkState.id
    };
    
    if (newTask.title !== undefined && newTask.description !== undefined && newTask.fkCategory !== undefined && newTask.fkState!== undefined) {
      if (newTask.title.length !== 0 && newTask.description.length !== 0 && newTask.fkCategory >= 0 && newTask.fkState >= 0) {
        this.taskService.postTask(newTask).subscribe(
          (data) => {
            if (data.valid === true) {
              this.router.navigate(['/tasks']);
            } else { document.getElementById('send-error').style.display = "block"; }
          }
        );
      } else { document.getElementById('form-error').style.display = "block"; }
    } else { document.getElementById('form-error').style.display = "block"; }
  }

  getStates() {
    this.stateService.getStates().subscribe(
      (data) => {
        this.states = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
