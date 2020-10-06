import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PoedService {

  shops = [
    {location: "Narva mnt 7", time: "9-17"}, 
    {location: "Toompuiestee 8", time: "9-18"}, 
    {location: "Liivalaia 15", time: "9-20"}
  ];

  constructor() { }

  getFirsthop(): {location: String, time: String} {
    
    return this.shops[0];
  }

  addOneShop(): void {
    this.shops.push({location: "Pärnu", time: "10-16"});
  }

}
