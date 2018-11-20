import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-father-route',
  template:`
  	<div>
	    <p>父路由</p>
	    <a routerLink="/heroes" routerLinkActive="active">连接到heroes路由</a>
	</div>
  `,
  styleUrls: ['./father-route.component.css']
})
export class FatherRouteComponent implements OnInit {

  constructor(route:ActivatedRoute) { 
    console.log(route)
  }

  ngOnInit() {
  }

}
