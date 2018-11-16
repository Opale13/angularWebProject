import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayCategoriesComponent } from './components/display-categories/display-categories.component';
import { ModifyCategoryComponent } from './components/modifyCategory/modify-category.component';
import { CreateCategoryComponent } from './components/createCategory/create-category.component';
import { DisplayTasksComponent } from './components/display-tasks/display-tasks.component';
import { ModifyTaskComponent } from './components/modifyTask/modify-task.component';
import { CreateTaskComponent } from './components/createTask/create-task.component';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'categories', component: DisplayCategoriesComponent },
  { path: 'category/:id', component: ModifyCategoryComponent },
  { path: 'newCategory', component: CreateCategoryComponent },
  { path: 'tasks', component: DisplayTasksComponent },
  { path: 'task/:id', component: ModifyTaskComponent },
  { path: 'newTask', component: CreateTaskComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}