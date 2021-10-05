import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/iproduct';
import { IUser } from 'src/app/interfaces/iuser';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  APIURICATEGORY = 'https://api-m-auto.herokuapp.com/api/categories'
  categories! : Observable<IProduct[]>;
  search!: string;
  constructor(private rest : RestService<IProduct>) { }

  ngOnInit(): void {
    this.categories = this.rest.getAll(this.APIURICATEGORY);
  }

}
