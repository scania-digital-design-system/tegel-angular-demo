import { Component, ViewEncapsulation } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular'; // Angular Data Grid Component
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid-column-search-floating-filter',
  standalone: true,
  encapsulation: ViewEncapsulation.None, // Disable Angular's style encapsulation
  templateUrl: './ag-grid-column-search-floating-filter.component.html',
  styleUrls: ['../../../assets/styles/main.css'],
  imports: [
    TegelModule,
    AgGridModule,
    AgGridAngular
  ]
})
export default class AgGridColumnSearchFloatingFilterComponent {

  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model'},
    { field: 'price' }
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    filter: true,
    floatingFilter: true,
  };
  public rowData = [
    { make: 'Toyota', model: 'Celica', price: '35000' },
    { make: 'Ford', model: 'Mondeo', price: '32000' },
    { make: 'Porsche', model: 'Boxster', price: '72000' }
  ];
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
