import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart; 
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.itemsInCart = this.cartService.cartItems;
  }

  onEmptyCart() {
   this.cartService.emptyCart();
   this.itemsInCart = this.cartService.cartItems;
      }
      onDeleteItem(itemIndex) {
        this.cartService.deleteItem(itemIndex);
      }
}
