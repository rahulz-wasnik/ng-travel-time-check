
import * as fromScheduleStore from './';

export function reducer(state = fromScheduleStore.initialState,
    action: fromScheduleStore.ScheduleAction): fromScheduleStore.ScheduleState {

    switch (action.type) {

        case fromScheduleStore.ScheduleActionTypes.GetSchedule:

            return {
                ...state,
                error: null,
                operationInProgress: true
            };

        case fromScheduleStore.ScheduleActionTypes.GetScheduleSuccess:

            return {
                ...state,
                schedule: action.payload,
                operationInProgress: false
            };

        case fromScheduleStore.ScheduleActionTypes.GetScheduleFail:

            return {
                ...state,
                schedule: [],
                error: action.payload,
                operationInProgress: false
            };

        default:
            return state;
    }

}
