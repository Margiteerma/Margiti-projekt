import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items; 

  constructor(private itemservice: ItemService, 
    private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.itemservice.itemsFromService;
    console.log(this.items);
  }

  onAddToCart(itemToBeAdded) {
    this.cartService.addItemToCart(itemToBeAdded);

  }
}
