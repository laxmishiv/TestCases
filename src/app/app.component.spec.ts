import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { GradePipe } from './grade.pipe';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { count } from 'rxjs';

describe('AppComponent', () => {
  
  let fixture : ComponentFixture<AppComponent>;
  let dl : DebugElement;
  let component : AppComponent;

  beforeEach(async () =>{
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent,GradePipe],
    }).compileComponents().then(() =>{
      fixture = TestBed.createComponent(AppComponent);
      dl=fixture.debugElement;
      component = fixture.componentInstance;
    });
  } );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should rendor a button with text Subscribe', () => {
    component.isSubscribed=false;
    fixture.detectChanges();
   const btnel=dl.queryAll(By.css('.subscribe'));
   //component.btnText="Subscribe";
   expect(btnel[0].nativeElement.textContent).toBe("Subscribe");
   expect(btnel[0].nativeElement.disabled).toBeFalse();

  });

  // it('should rendor a button with text Subscribed and button should be disabled after clicked', (done:DoneFn) => {
  //   component.isSubscribed=false;
  //   fixture.detectChanges();
  //   component.btnText="Subscribe";
  //   let btnel=dl.queryAll(By.css('.subscribe'));
  //   //component.isSubscribed=false;
  //   btnel[0].nativeElement.click();
  //   setTimeout(() =>{
  //     fixture.detectChanges();
  //     btnel=dl.queryAll(By.css('.subscribe'));
  //     expect(btnel[0].nativeElement.textContent).toBe("Subscribed");
  //     expect(btnel[0].nativeElement.disabled).toBeTrue(); 
  //     done(); 
  //   },3000);
    
  //  });

   it('should rendor a button with text Subscribed and button should be disabled after clicked',fakeAsync(() => {
    component.isSubscribed=false;
    fixture.detectChanges();
    component.btnText="Subscribe";
    let btnel=dl.queryAll(By.css('.subscribe'));
    //component.isSubscribed=false;
    btnel[0].nativeElement.click();
    setTimeout(() =>{
      console.log("Some other test cases");
    },8000);
    setTimeout(() =>{
      fixture.detectChanges();
      btnel=dl.queryAll(By.css('.subscribe'));
    },3000);
    flush();
    //tick(3000);
    expect(btnel[0].nativeElement.textContent).toBe("Subscribed");
    expect(btnel[0].nativeElement.disabled).toBeTrue(); 
    //tick(5000);
   })) 

   it('should test the promise',fakeAsync(()=>{
    let counter = 0;

    setTimeout(() =>{
      console.log("Fisrt settimeout");
      counter=counter + 2;
    },2000);

    setTimeout(() =>{
      console.log("2nd settimeout")
      counter=counter + 3;
    },3000);

    //it executes before settimeout
    Promise.resolve().then(()=>{
      console.log("Promise ")
      counter=counter + 1;
    })

    flush();
    expect(counter).toBe(6);
   })
  )
});
