import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';

interface APIResponse {
  success: boolean;
  data: any;
}

@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css'],
})
export class ManageBookComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
