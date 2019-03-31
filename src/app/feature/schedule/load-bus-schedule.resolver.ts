import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { take, skipWhile, tap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as fromStore from './store';

@Injectable({
    providedIn: 'root'
})
export class LoadBusScheduleResolver implements Resolve<any> {

    constructor(private store: Store<fromStore.State>) { }

    waitForDataToLoad(): Observable<any> {
        return this.store.pipe(select(fromStore.getOperationInProgress)).pipe(
            skipWhile(data => data),
            take(1)
        );
    }

    resolve(): Observable<any> | Observable<never> {
        this.store.dispatch(new fromStore.GetSchedule());
        return this.waitForDataToLoad();
    }
}
