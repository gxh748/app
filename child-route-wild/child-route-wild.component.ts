import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-route-wild',
  template: `
    <div>
    <p>
      wild路由!
    </p>
  </div>
  `,
  styleUrls: ['./child-route-wild.component.css']
})
export class ChildRouteWildComponent implements OnInit {

  constructor() { 
    console.log("app-child-route-wild");
  }

  ngOnInit() {
  }

}
