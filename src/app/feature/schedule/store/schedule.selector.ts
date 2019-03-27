
import * as fromBookStore from './';

import { createFeatureSelector, createSelector } from '@ngrx/store';

const getBookFeatureState = createFeatureSelector<fromBookStore.ScheduleState>('schedule');

export const getSchedule = createSelector(
    getBookFeatureState,
    state => state.schedule
);

export const getOperationInProgress = createSelector(
    getBookFeatureState,
    state => state.operationInProgress
);

export const getError = createSelector(
    getBookFeatureState,
    state => state.error
);


