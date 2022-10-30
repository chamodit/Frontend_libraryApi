import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

interface APIResponse {
  success: boolean;
  data: any;
}

@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css'],
})
export class AddAuthorComponent implements OnInit {
  public fname: string;
  public lname: string;
  public id: string;

  constructor(
    private formBuilder: FormBuilder,
    private authorsService: AuthorsService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.fname = '';
    this.lname = '';

    this.route.queryParams.subscribe((params) => {
      if (params.id) {
        this.authorsService
          .viewAuthorById(params.id)
          .subscribe((res: { data: any }) => {
            this.id = params.id;
            this.fname = res.data.fname;
            this.lname = res.data.lanem;
          });
      }
    });
  }

  //Add author
  addAuthor() {
    this.authorsService.addAuthor(this.fname, this.lname).subscribe(
      (res) => {
        console.log(res);
        this.snackbar.open('DETAILS ADDED SUCCESSFULLY', '', {
          duration: 2000,
        });
      },
      (err) => {
        this.snackbar.open('UNSUCCESSFULL PROCESS', '', { duration: 2000 });
        console.log(err.message);
      }
    );

    this.clear();
  }

  clear() {
    this.fname = '';
    this.lname = '';
  }
}
