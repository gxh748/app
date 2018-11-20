import { Component,OnInit,OnChanges } from '@angular/core';
import { ActivatedRoute,Router,NavigationStart,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges{
  title = 'route-app';
  constructor(private router:Router){}

  ngOnInit(){
  	this.router.events.subscribe(
  		event=>{
  			if (event instanceof NavigationStart) {
  				console.log("onInit NavigationStart: ",event);
  			}else if (event instanceof NavigationEnd) {
  				console.log("onInit NavigationEnd: ",event);
  			}
  		}
  		)
  }

  ngOnChanges(){
  	this.router.events.subscribe(
  		event=>{
  			if (event instanceof NavigationStart) {
  				console.log("OnChanges NavigationStart: ",event);
  			}else if (event instanceof NavigationEnd) {
  				console.log("OnChanges NavigationEnd: ",event);
  			}
  		}
  		)
  }

}
