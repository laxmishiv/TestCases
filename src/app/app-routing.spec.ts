import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { RouterTestingModule } from "@angular/router/testing";
import { routes } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { GradePipe } from "./grade.pipe";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("App Rputing", () =>{

    let router : Router;
     let fixture : ComponentFixture<AppComponent>;
     let homefixture : ComponentFixture<HomeComponent>;
     let infofixture : ComponentFixture<InfoComponent>;
     let location : Location;
     let dl : DebugElement;
     let btndl : DebugElement;


    beforeEach(waitForAsync(() =>{
        TestBed.configureTestingModule({
            imports : [RouterTestingModule.withRoutes(routes)],
            declarations :[AppComponent,HomeComponent,InfoComponent,GradePipe]
        }).compileComponents();
    }));

    beforeEach(() =>{
        router =TestBed.inject(Router);
        router.initialNavigation();
        fixture = TestBed.createComponent(AppComponent);
        location = TestBed.inject(Location);
        homefixture = TestBed.createComponent(HomeComponent);
        infofixture = TestBed.createComponent(InfoComponent);
        dl= homefixture.debugElement; 
        btndl= infofixture.debugElement;

    });

    it(" should navigate to the default path =home", waitForAsync(() =>{
       fixture.detectChanges();
       fixture.whenStable().then(() =>{
        expect(location.path()).toBe('/home');
       })//used to resume tesing after asynchronous change detection
    }));

    it("should navigate to info on clicking in home component", waitForAsync(() =>{
        homefixture.detectChanges();
        let links =dl.queryAll(By.css('a'));
        links[0].nativeElement.click();
        homefixture.whenStable().then(() =>{
            expect(location.path()).toBe('/info')
        })
    }));

    it("should navigate to home on clicking in info component", waitForAsync(() =>{
        infofixture.detectChanges();
        let btns =dl.queryAll(By.css('button'));
        btns[0].nativeElement.click();
        infofixture.whenStable().then(() =>{
            expect(location.path()).toBe('/home')
        })
    }));
})