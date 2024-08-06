import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result, User } from '../interfaces/github-username';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubUsernameService {
  private readonly apiURL = 'https://api.github.com/search/users?q=';
  constructor(private http: HttpClient) {}

  getUsername(searchTerm: string): Observable<User[]> {
    const serachURL = this.apiURL + searchTerm;
    console.log(serachURL);
    return this.http
      .get<Result>(serachURL)
      .pipe(map((res: Result) => res.items));
  }
}
