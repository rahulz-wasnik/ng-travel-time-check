import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteConstant } from './shared/constant/route.constant';

const routes: Routes = [
  { path: RouteConstant.schedule, loadChildren: './feature/schedule/schedule.module#ScheduleModule' },
  { path: '', redirectTo: RouteConstant.schedule, pathMatch: 'full' },
  { path: '**', redirectTo: RouteConstant.schedule, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
