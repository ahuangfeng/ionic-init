import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private API_URL: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public login(username: string, password: string) {
    return this.http.post(this.API_URL, { username, password }).toPromise();
  }

}
