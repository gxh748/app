import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,NavigationStart } from '@angular/router';

@Component({
  selector: 'app-child-route-data',
  template: `
  <div>
    <p>
      data路由!
    </p>
  </div>
    
  `,
  styleUrls: ['./child-route-data.component.css']
})
export class ChildRouteDataComponent implements OnInit {

  constructor(activeRoute:ActivatedRoute,private router:Router) {
    //console.log(activeRoute)
   }

  ngOnInit() {
    console.log(this.router.events);
    this.router.events.subscribe(
      event=>{
        if(event instanceof NavigationStart){
          console.log(event)
        }
      }
      )
  }

}
