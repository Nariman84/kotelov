import { Component, OnInit } from '@angular/core';
import { Currency } from '../entities/currency.enum';
import { Product } from '../entities/product.entity';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-total-price',
  templateUrl: './total-price.component.html',
  styleUrls: ['./total-price.component.scss']
})
export class TotalPriceComponent implements OnInit {
  public baseCurrency = Currency.dollars;
  public products: Product[] = [];

  public exchangeRates = {};

  public totalPrice = 0;
  public totalPriceInCurrency = {
    rubles: 0,
    euros: 0,
    dollars: 0,
    pounds: 0,
    yens: 0
  };

  public objectKeys = Object.keys;

  constructor(
    private cartService: CartService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.products = this.cartService.getProductInCart();
    this.setTotalPrice();
    this.getExchangeRates();
  }

  // расчет общей суммы в корзине (в долларах)
  setTotalPrice(): void {
    this.totalPrice = this.products.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }

  // получение курсов валют
  getExchangeRates(): void {
    this.apiService.getExchangeRates(this.baseCurrency).subscribe(data => {
      this.exchangeRates = data.rates;
      this.getTotalPriceInCurrency();
      return;
    });
  }

  // получение общей суммы в корзине в различных валютах
  getTotalPriceInCurrency(): void {
    for (const currency in this.totalPriceInCurrency) {
      if (this.totalPriceInCurrency.hasOwnProperty(currency)) {
        const exchangeRate = this.exchangeRates[Currency[currency]];
        this.totalPriceInCurrency[currency] = Math.round(
          this.totalPrice * exchangeRate
        );
      }

    }

    console.log(this.totalPriceInCurrency);
  }
}
