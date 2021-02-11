import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotalPriceComponent } from './total-price/total-price.component';
import { ApiService } from './services/api.service';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    TotalPriceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CartService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
