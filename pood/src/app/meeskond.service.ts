import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MeeskondService {
  membersFromService = ["Tõnu", "Kaarel", "Pille", "Joonas"];
  constructor() { }
}
