import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  emptyCart() {
    this.cartItems = []
  }
 cartItems = [];

  constructor() { }

  addItemToCart(cartitem) {
    this.cartItems.push(cartitem);
    console.log(this.cartItems);
  }

  deleteItem(index) {
    this.cartItems.splice(index, 1);
  }
}
