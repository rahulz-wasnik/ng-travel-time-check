import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';

import { ComponentComponent } from './component/component.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonModule,
    NgbTypeaheadModule
  ],
  declarations: [ComponentComponent],
  exports: [
    MatTabsModule,
    NgbTypeaheadModule,
    MatButtonModule
  ]
})
export class SharedModule { }
