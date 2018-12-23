import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task/task.service';
import { Task } from 'src/app/classes/task';
import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/app/classes/category';
import { State } from 'src/app/classes/state';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-modify-task',
  templateUrl: './modify-task.component.html',
  styleUrls: ['./modify-task.component.css']
})
/**
* Component to modify a task
*/
export class ModifyTaskComponent implements OnInit {
  task: Task;
  categories: Category[];
  states: State[];

  /**
  * Construct the component
  *
  * @param {ActivatedRoute} route
  * @param {Router} router
  * @param {TaskService} taskService
  * @param {StateService} stateService
  * @param {CategoryService} categoryService
  */
  constructor(private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService,
              private stateService: StateService,
              private categoryService: CategoryService) { }

  /** Recover one task, categories and states to display */
  ngOnInit() {
    this.getTask();
    this.getCategories();
    this.getState();
  }

  /** Recover the task to display with the id in URL */
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

  /** Recover the states */
  getState() {
    this.stateService.getStates().subscribe(
      (data) => {
        this.states = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  /** Confirm the modification */
  onSubmit() {
    let newTask = {
      'title': this.task.title,
      'description': this.task.description,
      'fkCategory': this.task.fkCategory.id,
      'fkState': this.task.fkState.id
    };

    if (newTask.title !== undefined && newTask.description !== undefined && newTask.fkCategory !== undefined && newTask.fkState!== undefined) {
      if (newTask.title.length !== 0 && newTask.description.length !== 0 && newTask.fkCategory >= 0 && newTask.fkState >= 0) {
        this.taskService.putTask(this.task.id, newTask).subscribe(
          (data) => {
            if (data.valid === true) {
              this.router.navigate(['/tasks']);
            } else { document.getElementById('send-error').style.display = "block"; }
          }
        );
      } else { document.getElementById('form-error').style.display = "block"; }
    } else { document.getElementById('form-error').style.display = "block"; }

  }
}
