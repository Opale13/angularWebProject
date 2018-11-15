import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DisplayCategoriesComponent } from './components/display-categories/display-categories.component';
import { ModifyCategoryComponent } from './components/modifyCategory/modify-category.component';
import { CreateCategoryComponent } from './components/createCategory/create-category.component';
import { DisplayTasksComponent } from './components/display-tasks/display-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCategoriesComponent,
    ModifyCategoryComponent,
    CreateCategoryComponent,
    DisplayTasksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,  
    FormsModule,  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
