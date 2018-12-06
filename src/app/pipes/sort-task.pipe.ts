import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../classes/task';

@Pipe({
  name: 'sortTasks'
})
export class SortTaskPipe implements PipeTransform {
  transform(value: Task[], category:string) {
    let tasks = new Array();
    if (category !== 'All') {
      value.forEach(task => {
        if (task.fkCategory.title === category) {
          tasks.push(task);
        }
      });
      return tasks;
      
    } else { return value; }
  }

}
