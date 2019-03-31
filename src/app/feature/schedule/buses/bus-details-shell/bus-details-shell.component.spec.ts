import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusDetailsShellComponent } from './bus-details-shell.component';

describe('BusDetailsShellComponent', () => {
  let component: BusDetailsShellComponent;
  let fixture: ComponentFixture<BusDetailsShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusDetailsShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusDetailsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
