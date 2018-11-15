import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteWildComponent } from './child-route-wild.component';

describe('ChildRouteWildComponent', () => {
  let component: ChildRouteWildComponent;
  let fixture: ComponentFixture<ChildRouteWildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouteWildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteWildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
