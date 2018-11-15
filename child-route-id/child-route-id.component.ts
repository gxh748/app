import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-route-id',
  template: `
    <div>
    <p>
      id路由!
    </p>
  </div>
  `,
  styleUrls: ['./child-route-id.component.css']
})
export class ChildRouteIdComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
