import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import {backendurl} from './constants';

@Injectable()
export class HttpService {

  constructor(private http: Http, private activatedRoute: ActivatedRoute) {

  }

  public dologin(request): Observable<any> {
    return this.http.post(backendurl + 'login', request)
      .map((response: Response) => <any> response)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
