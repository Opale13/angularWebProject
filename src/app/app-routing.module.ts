import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayCategoriesComponent } from './components/display-categories/display-categories.component';
import { ModifyCategoryComponent } from './components/modifyCategory/modify-category/modify-category.component';


const routes: Routes = [
  { path: '', redirectTo: '/#', pathMatch: 'full' },
  { path: 'categories', component: DisplayCategoriesComponent }
  { path: 'category/:id', component: ModifyCategoryComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}