import {OnDestroy, OnInit} from '@angular/core';
import data from '../../../assets/js/products.js';
import {Product} from '../../goods/product/product.interface';

export class GoodsService implements OnInit, OnDestroy {

  public goods: Product[] = JSON.parse(data);

  constructor() {}

  getAllGoods(): Product[] {
    return this.goods;
  }

  getProduct(position: number): Product {
    return this.goods[position];
  }

  getPosition(product: Product): number {
    return this.goods.indexOf(product);
  }

  getSuitableProducts(title: string, type: string): Product[] {
    let result = [];
    switch (type) {
      case 'Product name':
        result = this.goods.filter((product: Product): boolean => {
          return product.name.toLowerCase().indexOf(title) > -1;
        });
        break;
      case 'Category':
        result = this.goods.filter((product: Product): boolean => {
          return product.category.name.toLowerCase().indexOf(title) > -1;
        });
        break;
      case 'Brand':
        result = this.goods.filter((product: Product): boolean => {
          if (product.brand) {
            return product.brand.toLowerCase().indexOf(title) > -1;
          }
        });
    }
    return result;
  }

  ngOnInit() {
  }

  ngOnDestroy() {

  }
}
