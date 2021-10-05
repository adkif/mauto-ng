import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/iproduct';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
export class ProductSearchComponent implements OnInit {
  APIURISEARCH = 'https://api-m-auto.herokuapp.com/api/products/search?q=';
  APIURICAT = 'https://api-m-auto.herokuapp.com/api/products/category/';
  products!: Observable<IProduct[]>;
  constructor(
    private route: ActivatedRoute,
    private rest: RestService<IProduct[]>
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if(params.q){
        this.products = this.rest.getAll(this.APIURISEARCH + params.q)
      };
      if(params.catId){
        this.products = this.rest.getAll(this.APIURICAT + params.catId)
      };
    });
  }
}
