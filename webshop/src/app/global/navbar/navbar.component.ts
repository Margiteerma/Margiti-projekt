import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartCount = this.getCartCountValue();
  
  constructor( private cartService: CartService) { }

  ngOnInit(): void {
    
    this.cartService.cartChanged.subscribe(cartEsemed => {
    this.cartCount = cartEsemed.length; 
  })

}
getCartCountValue() {
  if(JSON.parse(localStorage.getItem("esemed")) != null) {
    return JSON.parse(localStorage.getItem("esemed")).length;   
  } else {
    return 0;   
  }
}
}
