import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/index';
import { PurchasesService } from '../../services/purchases.service';
import { Purchase } from '../../../purchases/purchase.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private productsCounter: number = this.getPurchasesCount();
  private subscription: Subscription;

  constructor(
    private purchasesService: PurchasesService
  ) { }

  getPurchasesCount(): number {
    return this.purchasesService.getPurchasesCount();
  }

  ngOnInit() {
    this.subscription = this.purchasesService.purchasesChanged.subscribe((data: Purchase[]) => {
      this.productsCounter = data.length;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
