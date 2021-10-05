import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService<T> {

  constructor(protected http: HttpClient) { }

  public getAll<T>(apiUrl: string): Observable<T[]> {
    return this.http.get<T[]>(apiUrl);
  }

  public getOne<T>(apiUrl: string): Observable<T> {
    return this.http.get<T>(apiUrl);
  }
}
