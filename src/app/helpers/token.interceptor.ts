import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.getTokenSubject.value;
    request = request.clone({
      setHeaders: {
        'key': 'WKRHJGDJAHFhkjhead676a75f65a6d5f78z5f78ajaf7s6786FUGJBF',
      }
    });
    if(token){
      request = request.clone({
        setHeaders: {
          'x-access-token': this.auth.getTokenSubject.value
        }
      });
    }
    return next.handle(request);
  }
}
