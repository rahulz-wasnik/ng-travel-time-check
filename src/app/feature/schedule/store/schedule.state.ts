import { Schedule } from 'src/app/model/schedule';


export interface ScheduleState {
    schedule: Schedule;
    operationInProgress: boolean;
    error: string;
}

export const initialState: ScheduleState = {
    schedule: null,
    operationInProgress: false,
    error: null
};

