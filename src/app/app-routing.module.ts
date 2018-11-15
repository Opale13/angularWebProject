import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayCategoriesComponent } from './components/display-categories/display-categories.component';
import { ModifyCategoryComponent } from './components/modifyCategory/modify-category.component';
import { CreateCategoryComponent } from './components/createCategory/create-category.component';


const routes: Routes = [
  { path: '', redirectTo: '/#', pathMatch: 'full' },
  { path: 'categories', component: DisplayCategoriesComponent },
  { path: 'category/:id', component: ModifyCategoryComponent },
  { path: 'newCategory', component: CreateCategoryComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}