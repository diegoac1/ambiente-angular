import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: "Ivonaldo",
        lastName: "Soares",
        age: 28
      },
      {
        firstName: "Maria",
        lastName: "Silva",
        age: 26
      },
      {
        firstName: "João",
        lastName: "Pereira",
        age: 30
      },
      {
        firstName: "Márcio",
        lastName: "Santos",
        age: 24
      }
    ]
    return of(peopleArray)
  }
}
