import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {PurchasesComponent} from './purchases.component';
import {PurchasesRoutingModule} from './purchases-routing.module';

@NgModule ({
  declarations: [
    PurchasesComponent
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    SharedModule
  ],
  exports: []
})

export class PurchasesModule {}
