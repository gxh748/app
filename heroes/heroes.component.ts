import { Component, OnInit ,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy} from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  constructor() { }

  ngOnChanges(){
  	console.log("1ngOnChanges :");
  }

  ngOnInit() {
  	console.log("2ngOnInit :called only once");
  }

  ngDoCheck(){
  	console.log("3ngDoCheck :");
  }
  ngAfterContentInit(){
  	console.log("4ngAfterContentInit called only once");
  }
  ngAfterContentChecked(){
  	console.log("5ngAfterContentChecked");
  }
  ngAfterViewInit(){
  	console.log("6ngAfterViewInit called only once");
  }
  ngAfterViewChecked(){
  	console.log("7ngAfterViewChecked");
  }
  ngOnDestroy(){
  	console.log("8ngOnDestroy  called only once");
  }

}