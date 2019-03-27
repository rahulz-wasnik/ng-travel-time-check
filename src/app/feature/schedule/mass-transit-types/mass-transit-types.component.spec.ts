import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassTransitTypesComponent } from './mass-transit-types.component';

describe('MassTransitTypesComponent', () => {
  let component: MassTransitTypesComponent;
  let fixture: ComponentFixture<MassTransitTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassTransitTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassTransitTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
