import { Component } from '@angular/core';
import { TegelModule } from '@scania/tegel-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid',
  standalone: true,
  templateUrl: './ag-grid.component.html',
  styleUrls: ['./ag-grid.component.scss', '../../../assets/styles/main.css'],  // Include your styles if needed
  imports: [
    TegelModule,
    AgGridModule,
  ]
})
export default class AgGridComponent {
  public columnDefs: ColDef[] = [
    { field: 'make', filter: true },
    { field: 'model', filter: true },
    { field: 'price', filter: true }
  ];
  public defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
    filter: true
  };
  public rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ];
  public gridApi!: GridApi;

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  onFilterTextBoxChanged(event: Event, field: string) {
    const filterText = (event.target as HTMLInputElement).value;
    this.gridApi.setFilterModel({
      [field]: {
        type: 'contains',  // You can adjust the filter type based on your needs
        filter: filterText
      }
    });
  }
}
