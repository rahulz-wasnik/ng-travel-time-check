
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, tap, mapTo } from 'rxjs/operators';
import { of } from 'rxjs';

import * as fromBookStore from './';
import { ScheduleService } from 'src/app/service/schedule/schedule.service';
import { ErrorHandlerService } from 'src/app/service/error-handler/error-handler.service';
import { ScheduleErrorConstant } from 'src/app/shared/constant/error.constant';

@Injectable({
    providedIn: 'root'
})
export class ScheduleEffect {

    constructor(private action$: Actions,
        private scheduleService: ScheduleService,
        private errorHandlerService: ErrorHandlerService) {
    }

    @Effect()
    getSchedule$ = this.action$.pipe(
        ofType(fromBookStore.ScheduleActionTypes.GetSchedule),
        switchMap(() =>
            this.scheduleService.get().pipe(
                map(response => new fromBookStore.GetScheduleSuccess(response)),
                catchError((error) => {
                    this.errorHandlerService.handleError(error);
                    return of(new fromBookStore.GetScheduleFail(ScheduleErrorConstant.getScheduleFail));
                }))
        ));
}
