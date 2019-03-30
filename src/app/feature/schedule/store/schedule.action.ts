
import { Action } from '@ngrx/store';

import { Schedule } from 'src/app/model/schedule';

export enum ScheduleActionTypes {
    GetSchedule = '[Schedule] Get Schedule',
    GetScheduleSuccess = '[Schedule] Get Schedule success',
    GetScheduleFail = '[Schedule] Get Schedule fail'
}

export class GetSchedule implements Action {
    readonly type = ScheduleActionTypes.GetSchedule;
}

export class GetScheduleSuccess implements Action {
    readonly type = ScheduleActionTypes.GetScheduleSuccess;
    constructor(public payload: Schedule) { }
}

export class GetScheduleFail implements Action {
    readonly type = ScheduleActionTypes.GetScheduleFail;
    constructor(public payload: string) { }
}


export type ScheduleAction = GetSchedule | GetScheduleSuccess | GetScheduleFail;
