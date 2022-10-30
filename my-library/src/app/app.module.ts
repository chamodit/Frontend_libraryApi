import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorsComponent } from './components/authors/authors.component';
import { BooksComponent } from './components/books/books.component';
import { AddAuthorComponent } from './components/authors/add-author/add-author.component';
import { ManageAuthorComponent } from './components/authors/manage-author/manage-author.component';
import { AddBookComponent } from './components/books/add-book/add-book.component';
import { ManageBookComponent } from './components/books/manage-book/manage-book.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    BooksComponent,
    AddAuthorComponent,
    ManageAuthorComponent,
    AddBookComponent,
    ManageBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
