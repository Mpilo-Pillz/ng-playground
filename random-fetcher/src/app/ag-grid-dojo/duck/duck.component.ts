import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-duck',
  templateUrl: './duck.component.html',
  styleUrls: ['./duck.component.scss']
})
export class DuckComponent implements ICellRendererAngularComp{
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.cellValue = this.getValueToDisplay(params);
        return true;
  }
  cellValue: string = "Mpillz";

  agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params)
  }

  buttonClicked() {
    alert("Bitton Clicked")
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
}
}
