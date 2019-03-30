import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeWhile } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Schedule } from 'src/app/model/schedule';
import { Bus } from 'src/app/model/bus';
import { AppConstant } from 'src/app/shared/constant/app.constant';
import * as fromStore from '../store';

const states = ['Hurstville', 'Carlton', 'Kogarah', 'Rockdale', 'Banksia', 'Wolli Creek',
  'Tempe', 'Sydnem', 'Central', 'Townhall', 'Martin place', 'Kings cross'];

@Component({
  selector: 'app-mass-transit-types',
  templateUrl: './mass-transit-types.component.html',
  styleUrls: ['./mass-transit-types.component.scss']
})
export class MassTransitTypesComponent implements OnInit, OnDestroy {

  schedule: Schedule;
  sydneyBuses: Bus[];
  westBuses: Bus[];
  operationInProgress = false;
  componentActive = true;

  constructor(private route: ActivatedRoute, private store: Store<fromStore.State>) { }

  ngOnInit() {
    this.getSchedule();
  }

  ngOnDestroy() {
    this.componentActive = false;
  }

  getSchedule(): void {
    this.store.pipe(select(fromStore.getSchedule)).pipe(
      takeWhile(() => this.componentActive)
    ).subscribe((data) => {
        if (data && data.organisations.length > 0) {
          this.schedule = data;
          this.sydneyBuses = data.organisations.find(element => element.organisation === AppConstant.sydneyBuses).busData;
          this.westBuses = data.organisations.find(element => element.organisation === AppConstant.westBuses).busData;
        }
      });
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );

  onModifySearch(): void {
    this.operationInProgress = true;
    setTimeout(() => {
      this.operationInProgress = false;
    }, 3000);
  }

}
