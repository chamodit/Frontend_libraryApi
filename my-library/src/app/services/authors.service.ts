import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient) {}

  public addAuthor(fname, lname) {
    return this.http.post(`${AppConfig.environment}/authors`, { fname, lname });
  }

  public viewAuthors() {
    return this.http.get(`${AppConfig.environment}/authors`);
  }

  public viewAuthorById(id) {
    return this.http.get(`${AppConfig.environment}/authors/${id}`);
  }
}
