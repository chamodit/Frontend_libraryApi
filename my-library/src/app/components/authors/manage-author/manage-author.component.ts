import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AuthorsService } from 'src/app/services/authors.service';
import { Router } from '@angular/router';

interface APIResponse {
  success: boolean;
  data: any;
}

@Component({
  selector: 'app-manage-author',
  templateUrl: './manage-author.component.html',
  styleUrls: ['./manage-author.component.css'],
})
export class ManageAuthorComponent implements OnInit {
  displyedColumns = ['auName', 'bkName'];
  dataSource: MatTableDataSource<any>;

  private _id: string;
  private fname: string;
  private lname: string;
  private authors: [];

  constructor(private authorsService: AuthorsService, private router: Router) {}

  ngOnInit(): void {
    this._id = '';
    this.fname = '';
    this.lname = '';
    this.viewAllAuthors();
  }

  viewAllAuthors() {
    this.authorsService.viewAuthors().subscribe((res: APIResponse) => {
      this.dataSource = new MatTableDataSource(res.data);
    });
  }
}
