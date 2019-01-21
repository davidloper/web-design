import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as globals from '../constants/global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(data): Observable<{}>{

    let url = `${globals.default_api_url}/user`;
  
    return this.http.post(url,data);
  }

  login(data):Observable<{}>{
  
    let url = `${globals.default_api_url}/login`;

    return this.http.get(url,{'params' : data});
  }

  logout(data):Observable<{}>{
  
    let url = `${globals.default_api_url}/logout`;

    return this.http.get(url,{'params' : data});
  }
}
