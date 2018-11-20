import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/index';
import {GoodsService} from '../../shared/services/goods.service';
import {Product} from './product.interface';
import {PurchasesService} from '../../shared/services/purchases.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  private product: Product = this.getProduct();
  private subscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private goodsService: GoodsService,
    private purchasesService: PurchasesService
  ) { }

  getProduct(): Product {
    let productData: Product;
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      productData = this.goodsService.getProduct(params.id);
    });
    return productData;
  }

  addToPurchases(data: Product): void {
    const position = this.goodsService.getPosition(data);
    this.purchasesService.addProduct(position, data);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
