import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { take, skipWhile } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';

import * as fromStore from './store';

@Injectable({
    providedIn: 'root'
})
export class LoadScheduleResolver implements Resolve<any> {

    constructor(private store: Store<fromStore.State>) { }

    waitForDataToLoad(): Observable<any> {
        return this.store.pipe(select(fromStore.getSchedule)).pipe(
            skipWhile(data => data.length === 0),
            take(1)
        );
    }

    resolve(): Observable<any> | Observable<never> {
        this.store.dispatch(new fromStore.GetSchedule());
        return this.waitForDataToLoad();
    }
}
