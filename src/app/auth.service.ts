import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { IUser } from './interfaces/iuser';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL = 'https://api-m-auto.herokuapp.com/api/users/';
  private tokenSubject: BehaviorSubject<any>;
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {
    this.tokenSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('token')!),
    );
  }

  public get getTokenSubject() {
    return this.tokenSubject;
  }

  public login(email: string, password: string) {
    return this.httpClient
      .post<any>(this.API_URL+'login', { email, password})
      .pipe(map(data => {
        if(data.status !== 403 && data.status !== 400 ){
          localStorage.setItem('token', JSON.stringify(data.user.token));
          localStorage.setItem('currentUser', JSON.stringify(data.user));
          this.tokenSubject.next(data.user.token);
        }
        return data;
      }));
  }

  public register(email: string, password: string): Observable<any> {
    return this.httpClient.post(this.API_URL+'register', { email, password, type:1});
  }

  public logout() {
    this.userService.removeUser();
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
  }
}
