import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
