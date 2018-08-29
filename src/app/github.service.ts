import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class GithubService {

  constructor(private http: Http) {
  }

  getRepos(): Observable<any> {
    const headers = new Headers({'Authorization': 'token ' + 'enter your token'});
    const opts = new RequestOptions({headers: headers});
    return this.http.get('https://api.github.com/user/repos?page=1', opts)
      .map(res => res.json());
  }
}
