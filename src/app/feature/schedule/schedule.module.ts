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
import { BusesComponent } from './buses/buses.component';

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
    BusesComponent
  ]
})
export class ScheduleModule { }
