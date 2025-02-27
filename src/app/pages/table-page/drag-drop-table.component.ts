import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

interface TableData {
  id: string;
  name: string;
  description: string;
  department?: string;
}

@Component({
  selector: 'app-drag-drop-table',
  template: `
    <div class="tds-headline-02 tds-u-pb1">Drag and Drop Tables</div>
    <div class="table-container tds-u-flex">
      <!-- Source Table -->
      <tds-table
        table-id="source-table"
        compact-design="false"
        responsive="false"
        cdkDropList
        #sourceList="cdkDropList"
        [cdkDropListData]="sourceTable"
        [cdkDropListConnectedTo]="[targetList]"
        (cdkDropListDropped)="drop($event)"
      >
        <tds-table-header>
          <tds-header-cell cell-key="id" cell-value="ID"></tds-header-cell>
          <tds-header-cell cell-key="name" cell-value="Name"></tds-header-cell>
          <tds-header-cell cell-key="description" cell-value="Description"></tds-header-cell>
        </tds-table-header>
        <tds-table-body>
          <ng-container *ngFor="let item of sourceTable; let i = index">
            <tds-table-body-row
              cdkDrag
              [cdkDragData]="item"
              [attr.data-index]="i"
            >
              <div *cdkDragPlaceholder></div>
              <tds-body-cell
                cell-value="{{item.id}}"
                cell-key="id"
              ></tds-body-cell>
              <tds-body-cell
                cell-value="{{item.name}}"
                cell-key="name"
              ></tds-body-cell>
              <tds-body-cell
                cell-value="{{item.description}}"
                cell-key="description"
              ></tds-body-cell>
            </tds-table-body-row>
          </ng-container>
        </tds-table-body>
      </tds-table>

      <!-- Target Table -->
      <tds-table
        table-id="target-table"
        compact-design="false"
        responsive="false"
        style="margin-left: 20px"
        cdkDropList
        #targetList="cdkDropList"
        [cdkDropListData]="targetTable"
        [cdkDropListConnectedTo]="[sourceList]"
        (cdkDropListDropped)="drop($event)"
      >
        <tds-table-header>
          <tds-header-cell cell-key="id" cell-value="ID"></tds-header-cell>
          <tds-header-cell cell-key="name" cell-value="Name"></tds-header-cell>
          <tds-header-cell cell-key="description" cell-value="Description"></tds-header-cell>
          <tds-header-cell cell-key="department" cell-value="Department"></tds-header-cell>
        </tds-table-header>
        <tds-table-body>
          <ng-container *ngFor="let item of targetTable; let i = index">
            <tds-table-body-row
              cdkDrag
              [cdkDragData]="item"
              [attr.data-index]="i"
            >
              <div *cdkDragPlaceholder></div>
              <tds-body-cell
                cell-value="{{item.id}}"
                cell-key="id"
              ></tds-body-cell>
              <tds-body-cell
                cell-value="{{item.name}}"
                cell-key="name"
              ></tds-body-cell>
              <tds-body-cell
                cell-value="{{item.description}}"
                cell-key="description"
              ></tds-body-cell>
              <tds-body-cell
                cell-value="{{item.department || 'Not set'}}"
                cell-key="department"
              ></tds-body-cell>
            </tds-table-body-row>
          </ng-container>
        </tds-table-body>
      </tds-table>
    </div>
  `,
  styles: [`
    .table-container {
      gap: 20px;
    }
    :host ::ng-deep .cdk-drag-preview {
      opacity: 0;
    }
    :host ::ng-deep .cdk-drag-placeholder {
      opacity: 0.5;
      background: #f5f5f5;
      border: 1px dashed #ccc;
      height: 48px;
    }
  `],
  standalone: true,
  imports: [CommonModule, TegelModule, DragDropModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DragDropTableComponent {
  sourceTable: TableData[] = [
    { id: '1', name: 'John Doe', description: 'Engineer' },
    { id: '2', name: 'Jane Smith', description: 'Designer' },
    { id: '3', name: 'Bob Johnson', description: 'Manager' },
  ];

  targetTable: TableData[] = [];

  drop(event: CdkDragDrop<TableData[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
} 