import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MassTransitTypesComponent } from './mass-transit-types/mass-transit-types.component';
import { LoadScheduleResolver } from './load-schedule.resolver';

const routes: Routes = [
  { path: '', component: MassTransitTypesComponent, resolve: { schedule: LoadScheduleResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
