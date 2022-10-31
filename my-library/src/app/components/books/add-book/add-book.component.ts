import { Component, OnInit, NgModule } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { AuthorsService } from 'src/app/services/authors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
  FormsModule,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface APIResponse {
  success: boolean;
  data: any;
}
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  public authors: [];

  public name: string;
  public isbn: string;
  public author: string;
  public id: string;

  constructor(
    private booksService: BooksService,
    private authorsService: AuthorsService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addBooks();
    this.viewAllAuthors();

    this.name = '';
    this.isbn = '';
    this.author = '';

    this.route.queryParams.subscribe((params) => {
      if (params.id) {
        this.booksService
          .viewBookById(params.id)
          .subscribe((res: { data: any }) => {
            this.id = params.id;
            this.name = res.data.name;
            this.isbn = res.data.isbn;
            this.author = res.data.author;
          });
      }
    });
  }

  addBooks() {
    this.booksService.addBook(this.name, this.isbn, this.author).subscribe(
      (res) => {
        console.log(res);
        this.snackbar.open('SUCCESSFUL', '', { duration: 2000 });
      },
      (err) => {
        this.snackbar.open('UNSUCCESSFUL', '', { duration: 2000 });
        console.log(err.message);
      }
    );

    this.clear();
  }

  clear() {
    this.name = '';
    this.isbn = '';
    this.author = '';
  }

  viewAllAuthors() {
    this.authorsService.viewAuthors().subscribe((res: { data: any }) => {
      this.authors = res.data;
    });
  }
}
