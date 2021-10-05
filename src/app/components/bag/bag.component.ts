import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {


  @Input() bag!: Observable<IProduct[]>;

  constructor() {
  }

  ngOnInit(): void {
  }
}
