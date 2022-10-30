import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
