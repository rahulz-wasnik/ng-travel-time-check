import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import * as fromStore from '../store';

@Component({
  selector: 'app-mass-transit-types',
  templateUrl: './mass-transit-types.component.html',
  styleUrls: ['./mass-transit-types.component.scss']
})
export class MassTransitTypesComponent implements OnInit {

  operationInProgress$: Observable<boolean> = this.store.pipe(select(fromStore.getOperationInProgress)).pipe(share());

  constructor(private route: ActivatedRoute, private store: Store<fromStore.State>) { }

  ngOnInit() {
  }

  onModifySearch(): void {
    this.store.dispatch(new fromStore.GetSchedule());
  }

}
