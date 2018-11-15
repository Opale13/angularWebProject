import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayCategoriesComponent } from './components/display-categories/display-categories.component';
import { AppRoutingModule } from './app-routing.module';
import { ModifyCategoryComponent } from './components/modifyCategory/modify-category/modify-category.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayCategoriesComponent,
    ModifyCategoryComponent
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
