import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
 cartItems = [];

  constructor() { }

  addItemToCart(cartitem) {
    this.cartItems = JSON.parse(localStorage.getItem("esemed"));
    this.cartItems.push(cartitem);
    localStorage.setItem("esemed", JSON.stringify(this.cartItems));
  }
  //!ülalolev rida hoiab väärtusi browseri mälus//

  emptyCart() {
    this.cartItems = []
    localStorage.setItem("esemed", JSON.stringify(this.cartItems));
  }

  deleteItem(index) {
    this.cartItems.splice(index, 1);
    localStorage.setItem("esemed", JSON.stringify(this.cartItems));
  }
}
