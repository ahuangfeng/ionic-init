import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpService, private tokenService: TokenService) { }

  public login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.httpService.login(username, password).then((token: string) => {
        this.tokenService.setToken(token);
        resolve(true);
      }).catch(error => {
        console.error(error);
        this.tokenService.clearToken();
        if (error.error) {
          reject(error.error);
        } else {
          reject(error);
        }
      });
    });
  }

  public isLoggedIn(): boolean {
    return this.tokenService.getToken() != undefined;
  }

  public logout(): void {
    this.tokenService.clearToken();
  }
}
