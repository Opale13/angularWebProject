import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';
import { Router } from '@angular/router';
import { Task } from 'src/app/classes/task';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {
  tasks: Task[]

  constructor(private taskService: TaskService,
              private router: Router) { }

  ngOnInit() {
    this.getTasks();
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

}
