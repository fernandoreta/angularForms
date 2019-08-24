import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyBabyServiceService {

  constructor() { }

  print() {
    console.log('my service works!!!');
  }
}
