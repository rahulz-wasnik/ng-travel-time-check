import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { Schedule } from 'src/app/model/schedule';
import { ActivatedRoute } from '@angular/router';
import { Bus } from 'src/app/model/bus';
import { AppConstant } from 'src/app/shared/constant/app.constant';

const states = ['Hurstville', 'Carlton', 'Kogarah', 'Rockdale', 'Banksia', 'Wolli Creek',
  'Tempe', 'Sydnem', 'Central', 'Townhall', 'Martin place', 'Kings cross'];

@Component({
  selector: 'app-mass-transit-types',
  templateUrl: './mass-transit-types.component.html',
  styleUrls: ['./mass-transit-types.component.scss']
})
export class MassTransitTypesComponent implements OnInit {

  schedule: Schedule;
  sydneyBuses: Bus[];
  westBuses: Bus[];
  operationInProgress = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.schedule = this.route.snapshot.data.schedule;
    this.sydneyBuses = this.schedule && this.schedule.organisations.length > 0 ?
      this.schedule.organisations.find(element => element.organisation === AppConstant.sydneyBuses).busData : [];
    this.westBuses = this.schedule && this.schedule.organisations.length > 0 ?
      this.schedule.organisations.find(element => element.organisation === AppConstant.westBuses).busData : [];
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
