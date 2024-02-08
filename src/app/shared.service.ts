import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { 
    console.log("A HTTP call");
  }

  mysharedfunction(){
    console.log("my shared functio is called");
  }
}
