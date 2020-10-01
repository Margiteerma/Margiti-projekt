import { Component, OnInit } from '@angular/core';
import { PoedService } from '../poed.service';

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {

  shops = [
    {location: "Narva mnt 7", time: "9-17"}, 
    {location: "Toompuiestee 8", time: "9-18"}, 
    {location: "Liivalaia 15", time: "9-20"}
  ];

  constructor(private poedService: PoedService) { }

  ngOnInit(): void {
    
  }

}
  