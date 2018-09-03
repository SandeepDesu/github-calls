import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { MultiPeriodChart } from 'charts-d3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  barSource:any=[];
  lineSource:any=[];
  lineData: any;
  barData:any;
  displayChart:Boolean=false;

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.getReposGithub();
    
  }

  showRepos(repos) {
    repos.forEach((value) => {
      this.barSource.push({
        y:value.repository.id,
        x:value.repository.id
      })
      this.lineSource.push({
        x: value.id,
        y: value.comments
      });
    });
    this.displayChart = true;
    this.barData = new MultiPeriodChart({
      'data': [
        {
          'name': 'bar-chart',
          'values': this.barSource
        }
      ],
    }, "Kick ass Line Chart");
    this.lineData =new MultiPeriodChart({
      'data': [
        {
          'name': 'barChart',
          'values': this.lineSource
        }
      ],
    }, "Kick ass Line Chart");
  }
  getReposGithub() {
    this.githubService.getDetails().subscribe((res) => this.showRepos(res));
  }

}
