import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';

import { RouteVariantPipe } from './pipe/route-variant.pipe';
import { RunningStatusPipe } from './pipe/running-status.pipe';
import { ProgressSpinnerComponent } from './component/progress-spinner/progress-spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    NgbTypeaheadModule
  ],
  declarations: [
    RouteVariantPipe,
    RunningStatusPipe,
    ProgressSpinnerComponent
  ],
  exports: [
    MatTabsModule,
    NgbTypeaheadModule,
    MatButtonModule,
    RouteVariantPipe,
    RunningStatusPipe,
    ProgressSpinnerComponent
  ]
})
export class SharedModule { }
