import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions, ResponseContentType} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class GithubService {

  constructor(private http: Http) {
  }
  
  getDetails(): Observable<any> {
    return this.http.get('assets/githubdata.json')
      .map(res => res.json());
  }

  getlakDetails(): Observable<any> {
    return this.http.get('assets/lak-github.json')
      .map(res => res.json());
  }
}
