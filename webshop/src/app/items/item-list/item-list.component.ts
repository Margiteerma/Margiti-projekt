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
    if (this.itemservice.itemsFromService !=null) {
      this.items = this.itemservice.itemsFromService;
    } else {
    this.itemservice.fetchItems().subscribe(vastus => {
      this.items = vastus;
      this.itemservice.itemsFromService = this.items;
    });
  }
  }

  onAddToCart(itemToBeAdded) {
    this.cartService.addItemToCart(itemToBeAdded);

  }
  onAllToDatabase() {
    this.itemservice.saveItems();
  }

  onMouseEnter(item) {
    item.showbutton = true;
  }

  onMouseLeave(item) {
    item.showbutton = false;
  }
}
