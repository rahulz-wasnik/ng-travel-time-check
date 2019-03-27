import {Pipe, PipeTransform} from '@angular/core';

@Pipe ({
   name : 'routeVariant'
})
export class RouteVariantPipe implements PipeTransform {
   transform(value: string): string {
       const part = value.substring(0,3);
       return `<b>${part}</b>&nbsp;${value.substr(3)}`;
   }
}