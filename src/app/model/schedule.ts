
import { Bus } from './bus';

export interface Schedule {
    organisation: string;
    date: string;
    buses: Bus[];
}
