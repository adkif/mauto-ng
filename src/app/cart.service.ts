import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProduct } from './interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public itemSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  private items: IProduct[] = [];

  constructor() {
    this.itemSubject.next(this.getBag());
    this.itemSubject.subscribe(data => this.items = data);
  }

  private getBag(): IProduct[] {
    const bag = localStorage.getItem('bag');
    return bag ? JSON.parse(bag) : [];
  }

  public getBagItems(): Observable<IProduct[]> {
    return this.itemSubject;
  }

  public addItem(item: IProduct): boolean {
    const bag: any = this.getBag();
    if (bag.find((data: any) => JSON.stringify(data) === JSON.stringify(item))) {
      return false;
    } else {
      this.items.push(item);
      localStorage.setItem('bag', JSON.stringify(this.items));
      this.itemSubject.next(this.items);
      return true;
    }
  }

  public removeItem(item: IProduct): boolean {
    let bag: any = this.getBag();
    if (bag.find((data: any) => JSON.stringify(data) === JSON.stringify(item))) {
      bag = bag.filter((data: any) => JSON.stringify(data) !== JSON.stringify(item));
      this.items = bag;
      localStorage.setItem('bag', JSON.stringify(this.items));
      this.itemSubject.next(this.items);
      return true;
    } else { return false; }
  }

  public clearBag() {
    this.items = [];
    localStorage.setItem('bag', JSON.stringify(this.items));
    this.itemSubject.next(this.items);
  }
}
