import {OnDestroy, OnInit} from '@angular/core';
import {Purchase} from '../../purchases/purchase.interface';
import {Subject} from 'rxjs/index';
import {Product} from '../../goods/product/product.interface';

export class PurchasesService implements OnInit, OnDestroy {

  public purchases: Purchase[] = this.getAllPurchases();
  public purchasesChanged = new Subject<Purchase[]>();

  constructor() {}

  getAllPurchases(): Purchase[] {
    const products = {...localStorage};
    const result = [];
    const keys = Object.keys(products);
    for (let i = 0; i < keys.length; i++) {
      const product = JSON.parse(products[keys[i]]);
      product.id = keys[i];
      result.push(product);
    }
    return result;
  }

  removeProduct(id: string): void {
    localStorage.removeItem(id);
    return this.purchasesChanged.next(this.getAllPurchases());
  }

  addProduct(position, data: Product): void {
    localStorage.setItem(position, JSON.stringify(data));
    return this.purchasesChanged.next(this.getAllPurchases());
  }

  getPurchasesCount(): number {
    return this.purchases.length;
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }
}
