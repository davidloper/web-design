import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as globals from '../constants/global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor(private http : HttpClient) { }

  store(data): Observable<{}>{

    let url = `${globals.default_api_url}/subscribe`;
    
    return this.http.post(url,data);
  }
}
