import { Component, ViewEncapsulation } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid-editable-cells',
  standalone: true,
  encapsulation: ViewEncapsulation.None, // Disable Angular's style encapsulation
  templateUrl: './ag-grid-editable-cells.component.html',
  styleUrls: ['../../../assets/styles/main.css'],
  imports: [
    TegelModule,
    AgGridModule,
    AgGridAngular
  ]
})
export default class AgGridEditableCellsComponent {

  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' }
  ];
  public defaultColDef: ColDef = {
    editable: true,
    cellDataType: true
  };
  public rowData = [];
  public gridApi!: GridApi;

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
    this.fetchData();
  }

  fetchData() {
    this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json')
      .subscribe(data => {
        this.gridApi.setGridOption('rowData', data);
      });
  }
}
