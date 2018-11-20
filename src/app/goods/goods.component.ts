import {Component, OnDestroy, OnInit} from '@angular/core';
import {GoodsService} from '../shared/services/goods.service';
import {Router} from '@angular/router';
import {PurchasesService} from '../shared/services/purchases.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs/index';
import {Product} from './product/product.interface';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit, OnDestroy {

  private goods: Product[] = this.goodsService.getAllGoods();
  private filter: FormGroup;
  private subscription: Subscription;
  private filterOptions: string[] = ['Product name', 'Category', 'Brand'];
  private p = 1;

  constructor(
    private router: Router,
    private goodsService: GoodsService,
    private purchasesService: PurchasesService
  ) { }

  viewDetails(product: Product): void {
    const position = this.goods.indexOf(product);
    this.router.navigate(['/goods', position]);
  }

  addToPurchases(product: Product): void {
    const position = this.goods.indexOf(product);
    this.purchasesService.addProduct(position, product);
  }

  initForm(): void {
    this.filter = new FormGroup({
      'filterValue': new FormControl(null, [Validators.required, Validators.maxLength(50), Validators.minLength(1)]),
      'filterData': new FormControl(null, [Validators.required])
    });
    this.filter.controls['filterData'].setValue(this.filterOptions[0], {onlySelf: true});
  }

  showResult(data: string, type: string): void {
    this.goods = this.goodsService.getSuitableProducts(data, type);
  }

  ngOnInit() {
    this.initForm();
    this.subscription = this.filter.valueChanges.subscribe((value): void => {
      if (this.filter.valid) {
        this.showResult(value.filterValue.trim().toLowerCase(), value.filterData);
      } else {
        this.goods = this.goodsService.getAllGoods();
      }
    });
  }

  ngOnDestroy() {

  }
}
