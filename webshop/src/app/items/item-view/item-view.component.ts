import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart/cart.service';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  id;
  item;

  constructor(private url: ActivatedRoute,
    private itemService: ItemService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.url.params.subscribe(parameeter => {
       this.id = parameeter.esemeID;
    })
    this.item = this.itemService.itemsFromService[this.id];
  }

  onAddToCart() {
    this.cartService.addItemToCart(this.item);
  }
}
