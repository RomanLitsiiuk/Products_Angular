import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GoodsService } from './shared/services/goods.service';
import { PurchasesService } from './shared/services/purchases.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    GoodsService,
    PurchasesService
  ],
  bootstrap: [AppComponent],
})

export class AppModule { }
