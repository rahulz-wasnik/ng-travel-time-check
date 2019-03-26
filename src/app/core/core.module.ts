import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

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
    ToolbarComponent
  ]
})
export class CoreModule { }
