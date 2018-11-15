import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteDataComponent } from './child-route-data.component';

describe('ChildRouteDataComponent', () => {
  let component: ChildRouteDataComponent;
  let fixture: ComponentFixture<ChildRouteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
