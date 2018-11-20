import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {GoodsComponent} from './goods.component';
import {ProductComponent} from './product/product.component';
import {GoodsRoutingModule} from './goods-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule ({
  declarations: [
    GoodsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    GoodsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  exports: []
})

export class GoodsModule {}
