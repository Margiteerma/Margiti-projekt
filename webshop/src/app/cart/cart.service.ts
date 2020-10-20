import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 cartItems = [];

  constructor() { }

  addItemToCart(cartitem) {
    this.cartItems.push(cartitem);
    console.log(this.cartItems);
  }
}
