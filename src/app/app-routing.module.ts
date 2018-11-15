import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisplayCategoriesComponent } from './components/display-categories/display-categories.component';


const routes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: DisplayCategoriesComponent }
  { path: 'category/:id', component: DisplayCategoriesComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}