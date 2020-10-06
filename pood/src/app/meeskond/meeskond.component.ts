import { Component, OnInit } from '@angular/core';
import { MeeskondService } from '../meeskond.service';

@Component({
  selector: 'app-meeskond',
  templateUrl: './meeskond.component.html',
  styleUrls: ['./meeskond.component.css']
})
export class MeeskondComponent implements OnInit {
  //vasakul pool muutuja "võtab" väärtst
  //paremal pool antakse väärtust
   muutuja = "SEE ON MUUTUJA VÄÄRTUS";
   members;

  constructor(private meeskond: MeeskondService) { }

  ngOnInit(): void {
    this.members = this.meeskond.membersFromService; 
  }

}
