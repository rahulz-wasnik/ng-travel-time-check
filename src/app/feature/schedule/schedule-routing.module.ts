import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MassTransitTypesComponent } from './mass-transit-types/mass-transit-types.component';

const routes: Routes = [
  {path: '', component: MassTransitTypesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
