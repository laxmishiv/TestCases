import { Injectable } from '@angular/core';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor(private sharedservice:SharedService) { }

  multiply(a:number,b:number){
    this.sharedservice.mysharedfunction();
    return a*b;
  }
  add(a:number,b:number){
    return a+b;
  }
}
