import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { IUser } from './interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = 'https://api-m-auto.herokuapp.com/api/users'
  subject : BehaviorSubject<any>;
  constructor(protected httpClient: HttpClient) {
    this.subject = new BehaviorSubject<IUser>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  }

  public removeUser() {
    localStorage.removeItem('currentUser');
    this.subject.next(null);
  }
}

