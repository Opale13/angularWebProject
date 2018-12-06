import { Component, OnInit} from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';
import { Router } from '@angular/router';
import { Task } from 'src/app/classes/task';
import { Category } from 'src/app/classes/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {
  tasks: Task[]
  categories: Category[];
  search: string = "All";

  constructor(private taskService: TaskService,
              private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.getTasks();
    this.getCategories();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(
      (data) => {
        this.tasks = data;
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

  showAlert(id) {
    let display = document.getElementById(id).style.display;
    
    if (display == "block") { document.getElementById(id).style.display = "none"; }
    else { document.getElementById(id).style.display = "block"; }
  }

  deleteTask(id) {
    this.taskService.deleteTask(id).subscribe(
      (data) => {
        if (data.valid == true) {
          let i=0;
          for (i; i<this.tasks.length; i++) {
            if (this.tasks[i].id == id) {
              this.tasks.splice(i, 1);
            }
          }

          console.log(this.tasks);

          this.router.navigate(['/tasks']);
        }
        else{
          console.log("error");
        }
      }
    );
  }
}

