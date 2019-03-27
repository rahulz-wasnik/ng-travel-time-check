import * as fromScheduleStore from './schedule.state';
import * as fromRootStoreState from './../../../store';

export interface State extends fromRootStoreState.State {
    schedule: fromScheduleStore.ScheduleState;
}

export * from './schedule.selector';
export * from './schedule.action';
export * from './schedule.state';
