import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { MassTransitTypesComponent } from './mass-transit-types/mass-transit-types.component';
import { SydneyBusesComponent } from './sydney-buses/sydney-buses.component';
import { WestBusesComponent } from './west-buses/west-buses.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    SharedModule
  ],
  declarations: [
    MassTransitTypesComponent,
    SydneyBusesComponent,
    WestBusesComponent
  ]
})
export class ScheduleModule { }
