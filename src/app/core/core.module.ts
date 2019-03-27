import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    ToolbarComponent
  ],
  exports: [
    HeaderComponent,
    ToolbarComponent,
    SharedModule
  ]
})
export class CoreModule { }
