import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string;

  constructor(private storage: NativeStorage) { }

  public setToken(token: string) {
    this.token = token;
    this.storage.setItem('token', token);
  }

  public getToken() {
    return this.token;
  }

  public clearToken() {
    this.token = undefined;
    this.storage.clear();
  }

}
