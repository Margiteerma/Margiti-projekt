import { Component, OnInit } from '@angular/core';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  humans = [];
  human;

  constructor(private arrayService: ArrayService) { }

  ngOnInit(): void {
    this.humans = this.arrayService.getAll();
  }

  onRemoveAll() {
    this.arrayService.removeAll();
    this.humans = this.arrayService.getAll();
  }

  onRemoveOne(i) {
    this.arrayService.removeOne(i);
    this.humans = this.arrayService.getAll();
  }

  onAdd(human) {
    this.arrayService.addOne(human);
    this.humans = this.arrayService.getAll();
  }

  onGetOne(i) {
    this.arrayService.getOne(i);
  }

  onGetAll() {
    this.humans = this.arrayService.getAll();
  }
}
