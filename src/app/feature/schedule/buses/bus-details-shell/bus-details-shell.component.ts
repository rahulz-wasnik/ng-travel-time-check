import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { takeWhile } from 'rxjs/operators';

import { Schedule } from 'src/app/model/schedule';
import { Bus } from 'src/app/model/bus';
import { AppConstant } from 'src/app/shared/constant/app.constant';
import * as fromStore from '../../store';


@Component({
  selector: 'app-bus-details-shell',
  templateUrl: './bus-details-shell.component.html',
  styleUrls: ['./bus-details-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BusDetailsShellComponent implements OnInit, OnDestroy {

  schedule: Schedule;
  sydneyBuses: Bus[];
  westBuses: Bus[];
  componentActive = true;

  constructor(private store: Store<fromStore.State>) { }

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

}
