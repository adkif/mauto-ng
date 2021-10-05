import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/iproduct';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-product-all',
  templateUrl: './product-all.component.html',
  styleUrls: ['./product-all.component.scss']
})
export class ProductAllComponent implements OnInit {
  APIURIPRODUCT = 'https://api-m-auto.herokuapp.com/api/products'
  products! : Observable<IProduct[]>;
  constructor(private rest : RestService<IProduct>) { }

  ngOnInit(): void {
    this.products = this.rest.getAll(this.APIURIPRODUCT)
  }

}
