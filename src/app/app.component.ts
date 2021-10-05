import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { CartService } from './cart.service';
import { IProduct } from './interfaces/iproduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onehorizon';
  public bag: Observable<IProduct[]>;
  public isOnline: Observable<any>;
  constructor(
    private auth: AuthService,
    private cartService: CartService,
  ) {
    this.bag = this.cartService.getBagItems();
    this.bag.subscribe(data => data);
    this.isOnline = this.auth.getTokenSubject;
    this.isOnline.subscribe(x => x);
  }



  logout(){
    this.auth.logout();
  }
}
