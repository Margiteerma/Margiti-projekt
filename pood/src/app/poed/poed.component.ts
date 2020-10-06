import { Component, OnInit } from '@angular/core';
import { PoedService } from '../poed.service';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {
  shop: { location: String; time: String; };
  shops;

  constructor(private poedService: PoedService) {

   }

  ngOnInit(): void {
   //this.poedService.addOneShop();
  this.shop = this.poedService.getFirsthop();
  this.shops = this.poedService.shops;
  }

}
  