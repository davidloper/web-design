import { Injectable } from '@angular/core';
import * as globals from '../constants/global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  // private headers = new HttpHeaders({
  //   'Content-Type' : 'application/json',
  // });

  constructor(private http : HttpClient) { }

  store(data): Observable<{}>{

    let url : string = globals.default_api_url + '/feedback';

    return this.http.post(url,data);
  }
}
