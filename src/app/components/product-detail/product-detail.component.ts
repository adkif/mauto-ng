import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { IProduct } from 'src/app/interfaces/iproduct';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  APIURIPRODUCT = 'https://api-m-auto.herokuapp.com/api/products/'
  product: any;
  constructor(private router: Router,private route: ActivatedRoute, private rest: RestService<IProduct>, private cartService: CartService) {this.router.routeReuseStrategy.shouldReuseRoute = () => false; }

  ngOnInit(): void {
    const id = this.route.snapshot.params.productId
    this.rest.getOne(this.APIURIPRODUCT+id).subscribe(product => {this.product = product});
    console.log(this.product);

  }

  public addCart(product: IProduct): void {
    this.cartService.addItem(product);
  }

}
