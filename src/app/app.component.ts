import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onehorizon';
  public isOnline: Observable<any>;
  constructor(
    private auth: AuthService,
  ) {
    this.isOnline = this.auth.getTokenSubject;
    this.isOnline.subscribe(x => x);
  }

  logout(){
    this.auth.logout();
  }
}
