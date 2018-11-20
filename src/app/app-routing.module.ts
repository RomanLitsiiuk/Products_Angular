import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'goods', pathMatch: 'full'},
  {path: 'goods', loadChildren: './goods/goods.module#GoodsModule'},
  {path: 'purchases', loadChildren: './purchases/purchases.module#PurchasesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
