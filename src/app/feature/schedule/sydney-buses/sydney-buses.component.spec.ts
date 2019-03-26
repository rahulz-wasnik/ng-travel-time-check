import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SydneyBusesComponent } from './sydney-buses.component';

describe('SydneyBusesComponent', () => {
  let component: SydneyBusesComponent;
  let fixture: ComponentFixture<SydneyBusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SydneyBusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SydneyBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
