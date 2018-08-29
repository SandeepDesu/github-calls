import {Component, OnInit} from '@angular/core';
import {GithubService} from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.githubService.getRepos().subscribe((res) => console.log(res));
  }

}
