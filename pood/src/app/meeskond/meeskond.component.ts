import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeskond',
  templateUrl: './meeskond.component.html',
  styleUrls: ['./meeskond.component.css']
})
export class MeeskondComponent implements OnInit {
  //vasakul pool muutuja "võtab" väärtst
  //paremal pool antakse väärtust
   muutuja = "SEE ON MUUTUJA VÄÄRTUS";
   list = ["yks", "kaks", "kolm"];

  constructor() { }

  ngOnInit(): void {
  }

}