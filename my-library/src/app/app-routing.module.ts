import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';
import { AddAuthorComponent } from './components/authors/add-author/add-author.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { ManageAuthorComponent } from './components/authors/manage-author/manage-author.component';
import { ManageBookComponent } from './components/books/manage-book/manage-book.component';

const routes: Routes = [
  {
    path: '',
    component: AddAuthorComponent,
    children: [
      { path: 'manage', component: ManageAuthorComponent },
      {
        path: 'books',
        component: ManageBookComponent,
        children: [
          {
            path: 'add',
            component: AddBookComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
