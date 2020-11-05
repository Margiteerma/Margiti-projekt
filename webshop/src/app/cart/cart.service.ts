import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = [];
  cartChanged = new Subject<{imgSrc: string, title: string, price: string,
  category: string}[]>();

  constructor() { }

  addItemToCart(cartitem) {
    this.cartItems = JSON.parse(localStorage.getItem("esemed")) || [];
    this.cartItems.push(cartitem);
    localStorage.setItem("esemed", JSON.stringify(this.cartItems));
    this.cartChanged.next(this.cartItems);
  }
  //!ülalolev rida hoiab väärtusi browseri mälus//

  emptyCart() {
    this.cartItems = []
    localStorage.setItem("esemed", JSON.stringify(this.cartItems));
    this.cartChanged.next(this.cartItems);
  }

  deleteItem(index) {
    this.cartItems = JSON.parse(localStorage.getItem("esemed")) || [];
    this.cartItems.splice(index, 1);
    localStorage.setItem("esemed", JSON.stringify(this.cartItems));
    this.cartChanged.next(this.cartItems);
  }
}
