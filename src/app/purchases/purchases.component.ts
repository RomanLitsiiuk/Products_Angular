import {Component, OnDestroy, OnInit} from '@angular/core';
import {PurchasesService} from '../shared/services/purchases.service';
import {Purchase} from './purchase.interface';
import {Subscription} from 'rxjs/index';
import {Router} from '@angular/router';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss']
})
export class PurchasesComponent implements OnInit, OnDestroy {

  private purchases: Purchase[] = this.getPurchases();
  private subscription: Subscription;
  private result: number = this.getFullPrice(this.purchases);

  constructor(
    private purchasesService: PurchasesService,
    private router: Router
  ) { }

  getPurchases(): Purchase[] {
    return this.purchasesService.getAllPurchases();
  }

  removeFromPurchases(id: string): void {
    this.purchasesService.removeProduct(id);
  }

  getFullPrice(data: Purchase[]): number {
    return data.reduce((sum, elem) => {
      return sum += +elem.prices.with_discount_grn;
    }, 0);
  }

  viewDetails(productData): void {
    this.router.navigate(['/goods', productData.id]);
  }

  congratulations(): void {
    this.purchases.forEach((elem) => {
      console.log(`You have bought ${elem.name}`);
    });
  }

  ngOnInit() {
    this.subscription = this.purchasesService.purchasesChanged.subscribe((data: Purchase[]) => {
      this.purchases = data;
      this.result = this.getFullPrice(data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
