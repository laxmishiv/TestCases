import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let dl : DebugElement;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [HomeComponent]
  //   });
  //   fixture = TestBed.createComponent(HomeComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  beforeEach(waitForAsync(
    ()=>{
      TestBed.configureTestingModule({
        declarations: [HomeComponent]
      }).compileComponents().then(()=>{
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        dl=fixture.debugElement;
      });
   
    }
  ))

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct content', ()=>{
    let pl=dl.queryAll(By.css('p'));
    expect(pl[0].nativeElement.textContent).toBe('home works!');
    let bl=dl.queryAll(By.css('.btn'));
    expect(bl[0].nativeElement.disabled).toBeTrue();
    let imgel=dl.queryAll(By.css('img'));
    expect(imgel[0].nativeElement.src).toBe('http://imgsrc.com/123');
   // component.title="Welcome to Angular Unit testing";
    fixture.detectChanges();
    let titleel=dl.queryAll(By.css('.title'));
    expect(titleel[0].nativeElement.textContent).toBe('Working with JAsmine and KARMA');
  })
});
