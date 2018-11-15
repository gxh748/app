import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteIdComponent } from './child-route-id.component';

describe('ChildRouteIdComponent', () => {
  let component: ChildRouteIdComponent;
  let fixture: ComponentFixture<ChildRouteIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouteIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
