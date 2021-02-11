import { Injectable } from '@angular/core';
import { Product } from '../entities/product.entity';

const selectedCart: Product[] = [
  { price: 20 },
  { price: 45 },
  { price: 67 },
  { price: 1305 }
];

@Injectable()
export class CartService {
  constructor() {}

  getProductInCart(): Product[] {
    return selectedCart;
  }
}
