import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsInCart; 
  sumOfCart = 0; 
  
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getItemsFromLocalStorage();
    this.calculateSum();
  }

  onEmptyCart() {
   this.cartService.emptyCart();
   this.getItemsFromLocalStorage();
   this.calculateSum();
      }

  onDeleteItem(itemIndex) {
        this.cartService.deleteItem(itemIndex);
        this.getItemsFromLocalStorage();
        this.calculateSum();
      }

  calculateSum() {
    this.sumOfCart = 0;
    this.itemsInCart.forEach(eseOstukorvis => {
      console.log(typeof eseOstukorvis.price);
      this.sumOfCart = this.sumOfCart + (Number)(eseOstukorvis.price);
    });
    this.sumOfCart = (Number)(this.sumOfCart.toFixed(2));
  }

  getItemsFromLocalStorage() {
    this.itemsInCart = JSON.parse(localStorage.getItem("esemed")) || []; 
    //selle abil oleme täitnud ostukorvi sellega, mis on meil localstorages//
  }

}
