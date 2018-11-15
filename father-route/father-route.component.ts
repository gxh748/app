import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
