import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  public addBook(name, isbn, author) {
    return this.http.post(`${AppConfig.environment}/books`, {
      name,
      isbn,
      author,
    });
  }

  public viewBooks() {
    return this.http.get(`${AppConfig.environment}/books`);
  }

  public viewBookById(id) {
    return this.http.get(`${AppConfig.environment}/books/${id}`);
  }
}
