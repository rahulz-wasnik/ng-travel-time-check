import { Pipe, PipeTransform } from '@angular/core';
import { AppConstant } from '../constant/app.constant';

@Pipe({
    name: 'runningStatus'
})
export class RunningStatusPipe implements PipeTransform {
    transform(value: number): string {
        if (value !== 0 && value !== 1 && value !== -1) {
            return `<span class="text-secondary">${AppConstant.unknown}</span>`;
        } else if (value === 0) {
            return `<span class="text-info">${AppConstant.onTime}</span>`;
        } else if (value === 1) {
            return `<span class="text-success">${AppConstant.early}</span>`;
        } else if (value === -1) {
            return `<span class="text-danger">${AppConstant.late}</span>`;
        }
        return '';
    }
}