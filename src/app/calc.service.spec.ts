import { share } from "rxjs";
import { CalcService } from "./calc.service"
import { SharedService } from "./shared.service";
import { TestBed } from "@angular/core/testing";

describe("CalcService",()=>{

  let shared=new SharedService();
  let calc=new CalcService(shared);
  beforeEach(()=>{
  //  shared=new SharedService();
  //  calc=new CalcService(shared);
  shared=jasmine.createSpyObj("SharedService",["mysharedfunction"]);
    TestBed.configureTestingModule({
    providers:[CalcService,{
      provide : SharedService, useValue:shared
    }]
  });
    shared=TestBed.inject(SharedService);
    calc=TestBed.inject(CalcService);
    });                 
  it("should multiply two numbers",()=>{
    // const shared=new SharedService();
    // const calc=new CalcService(shared);
    const result= calc.multiply(10,10);
    expect(result).toBe(100);
  })
  it("should add two numbers",()=>{
    // const shared=new SharedService();
    // const calc=new CalcService(shared);
    const result= calc.add(10,10);
    expect(result).toBe(20);
  })
  // it("should cal the shared funct",()=>{
  //     //const shared=new SharedService();
  //     const shared=jasmine.createSpyObj("SharedService",["mysharedfunction"]);
  //     //spyOn(shared,"mysharedfunction");
  //     const calc=new CalcService(shared);
  //     const result=calc.multiply(10,10);
  //     //expect(shared.mysharedfunction).toHaveBeenCalled();
  //     expect(result).toBe(100);
  // })
})