import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ScheduleRoutingModule } from './schedule-routing.module';
import { MassTransitTypesComponent } from './mass-transit-types/mass-transit-types.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FilterResultComponent } from './filter-result/filter-result.component';
import { reducer } from './store/schedule.reducer';
import { ScheduleEffect } from './store/schedule.effect';
import { BusDetailsShellComponent } from './buses/bus-details-shell/bus-details-shell.component';
import { BusScheduleComponent } from './buses/bus-schedule/bus-schedule.component';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    SharedModule,
    StoreModule.forFeature('schedule', reducer),
    EffectsModule.forFeature([ScheduleEffect])
  ],
  declarations: [
    MassTransitTypesComponent,
    FilterResultComponent,
    BusDetailsShellComponent,
    BusScheduleComponent
  ]
})
export class ScheduleModule { }
