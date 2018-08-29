import {Component, OnInit} from '@angular/core';
import {GithubService} from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  list: any;
  errorMessage = null;
  display = false;

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.getRepos();
  }

  getRepos() {
    this.githubService.getRepos().subscribe((res) => this.list = res);
  }

  showRepos() {
    if (!this.list && !this.list.length) {
      this.display = false;
      this.errorMessage = 'Some thing went wrong please try again later!!!!!';
      this.getRepos();
    } else {
      console.log(this.list);
      this.display = true;
    }
  }

}
