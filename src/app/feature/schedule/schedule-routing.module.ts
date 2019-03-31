import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MassTransitTypesComponent } from './mass-transit-types/mass-transit-types.component';
import { LoadBusScheduleResolver } from './load-bus-schedule.resolver';
import { RouteConstant } from 'src/app/shared/constant/route.constant';
import { BusDetailsShellComponent } from './buses/bus-details-shell/bus-details-shell.component';

const routes: Routes = [
  {
    path: '', component: MassTransitTypesComponent, children: [
      { path: RouteConstant.buses, component: BusDetailsShellComponent, resolve: { schedule: LoadBusScheduleResolver } },
      { path: '', redirectTo: RouteConstant.buses, pathMatch: 'full' },
      { path: '**', redirectTo: RouteConstant.buses, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
