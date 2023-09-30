import { Component } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { IOlympicData } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { DuckComponent } from './duck/duck.component';
import { MedalCellRendererComponent } from './medal-cell-renderer/medal-cell-renderer.component';

@Component({
  selector: 'app-ag-grid-dojo',
  templateUrl: './ag-grid-dojo.component.html',
  styleUrls: ['./ag-grid-dojo.component.scss']
})
export class AgGridDojoComponent {
  constructor(private http: HttpClient) {}

  public columnDefs: ColDef[] = [
    { field: 'athlete' },
    { field: 'year' },
    { field: 'gold', cellRenderer: MedalCellRendererComponent },
    { field: 'silver', cellRenderer: MedalCellRendererComponent },
    { field: 'bronze', cellRenderer: MedalCellRendererComponent },
    { field: 'total', minWidth: 175, cellRenderer: DuckComponent },
  ];

  public defaultColDef: ColDef = {
    editable: true,
    sortable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
    resizable: true,
  };

  public rowData!: IOlympicData[];

  onGridReady(params: GridReadyEvent<IOlympicData>) {
    this.http
      .get<IOlympicData[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => {
        this.rowData = data;
      });
  }
}
