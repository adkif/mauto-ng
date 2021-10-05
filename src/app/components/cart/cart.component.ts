import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { IProduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Observable<IProduct[]> = new Observable<IProduct[]>();
  quantities:number[] = [];
  card:any = {
    name: "Adolphe Kifungo",
    month: "09",
    year: "24"
  };
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.cartService.getBagItems();
    this.products.subscribe(products => {
      this.quantities = Array(products.length).fill(1);
    })
  }

  getTotal(){
    let price = 0;
    this.products.subscribe(products => {
      products.forEach((product, index) => {
        price += product.price * this.quantities[index];
      });
    })
    return price;
  }

  delete(product: IProduct){
    this.cartService.removeItem(product)
  }

}
