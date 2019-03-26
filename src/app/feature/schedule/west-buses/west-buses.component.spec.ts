import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WestBusesComponent } from './west-buses.component';

describe('WestBusesComponent', () => {
  let component: WestBusesComponent;
  let fixture: ComponentFixture<WestBusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestBusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
