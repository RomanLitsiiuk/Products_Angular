import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { GoodsComponent } from './goods.component';

const routes: Routes = [
  {path: '', component: GoodsComponent},
  {path: ':id', component: ProductComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GoodsRoutingModule { }
