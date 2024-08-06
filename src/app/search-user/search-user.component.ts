import { Component } from '@angular/core';
import { GithubUsernameService } from '../services/github-username.service';
import { User } from '../interfaces/github-username';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css'],
})
export class SearchUserComponent {
  searchResult: User[];
  searchTerm: string = '';
  filterTerm: string = '';
  constructor(private githubUsernameService: GithubUsernameService) {}

  serach() {
    this.githubUsernameService
      .getUsername(this.searchTerm)
      .subscribe((result) => {
        this.searchResult = result;
      });
  }
}
