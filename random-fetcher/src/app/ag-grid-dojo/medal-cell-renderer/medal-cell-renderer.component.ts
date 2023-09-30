import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';
import { IOlympicData } from '../interfaces';

@Component({
  selector: 'app-medal-cell-renderer',
  templateUrl: './medal-cell-renderer.component.html',
  styleUrls: ['./medal-cell-renderer.component.scss']
})
export class MedalCellRendererComponent {
  public displayValue!: string;

  agInit(params: ICellRendererParams<IOlympicData, number>): void {
    this.displayValue = new Array(params.value!).fill('#').join('');
  }

  refresh(params: ICellRendererParams) {
    return false;
  }
}
