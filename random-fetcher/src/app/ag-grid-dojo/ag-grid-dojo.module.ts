import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridDojoComponent } from './ag-grid-dojo.component';
import { DuckComponent } from './duck/duck.component';
import { MedalCellRendererComponent } from './medal-cell-renderer/medal-cell-renderer.component';




@NgModule({
  declarations: [AgGridDojoComponent, DuckComponent, MedalCellRendererComponent],
  imports: [
    CommonModule, AgGridModule
  ]
})
export class AgGridDojoModule {

 
  
 }
