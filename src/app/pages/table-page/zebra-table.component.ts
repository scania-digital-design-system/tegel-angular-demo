import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TegelModule } from '@scania/tegel-angular';

@Component({
  selector: 'app-zebra-table',
  template: `
    <div class="tds-headline-02 tds-u-pb1 tds-u-mt3">Zebra Table</div>
    <div class="tds-headline-04 tds-u-pb1 tds-u-mt1">Zebra Mode: rows-odd</div>
    <tds-table
      vertical-dividers="false"
      compact-design="false"
      responsive
      no-min-width
      zebra-mode="rows-odd"
    >
      <tds-table-header>
        <tds-header-cell
          cell-key="truck"
          cell-value="Truck type"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="driver"
          cell-value="Driver name"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="country"
          cell-value="Country"
        ></tds-header-cell>
        <tds-header-cell
          text-align="right"
          cell-key="mileage"
          cell-value="Mileage"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Sweden"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="4000"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Germany"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="260"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Norway"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="5889"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>

        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Denmark"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="1234"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Finland"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="4321"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Iceland"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="5678"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="France"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="8765"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Italy"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="6789"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Spain"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="9876"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Portugal"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="3456"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
      </tds-table-body>
    </tds-table>

    <div class="tds-headline-04 tds-u-pb1 tds-u-mt3">Zebra Mode: rows-even</div>
    <tds-table
      vertical-dividers="false"
      compact-design="false"
      responsive
      no-min-width
      zebra-mode="rows-even"
    >
      <tds-table-header>
        <tds-header-cell
          cell-key="truck"
          cell-value="Truck type"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="driver"
          cell-value="Driver name"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="country"
          cell-value="Country"
        ></tds-header-cell>
        <tds-header-cell
          text-align="right"
          cell-key="mileage"
          cell-value="Mileage"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Sweden"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="4000"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Germany"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="260"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Norway"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="5889"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>

        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Denmark"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="1234"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Finland"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="4321"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Iceland"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="5678"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="France"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="8765"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Italy"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="6789"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Spain"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="9876"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Portugal"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="3456"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
      </tds-table-body>
    </tds-table>

    <div class="tds-headline-04 tds-u-pb1 tds-u-mt3">Zebra Mode: columns-odd</div>
    <tds-table
      vertical-dividers="false"
      compact-design="false"
      responsive
      no-min-width
      zebra-mode="columns-odd"
    >
      <tds-table-header>
        <tds-header-cell
          cell-key="truck"
          cell-value="Truck type"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="driver"
          cell-value="Driver name"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="country"
          cell-value="Country"
        ></tds-header-cell>
        <tds-header-cell
          text-align="right"
          cell-key="mileage"
          cell-value="Mileage"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Sweden"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="4000"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Germany"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="260"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Norway"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="5889"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>

        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Denmark"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="1234"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Finland"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="4321"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Iceland"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="5678"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="France"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="8765"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Italy"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="6789"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Spain"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="9876"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Portugal"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="3456"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
      </tds-table-body>
    </tds-table>

    <div class="tds-headline-04 tds-u-pb1 tds-u-mt3">Zebra Mode: columns-even</div>
    <tds-table
      vertical-dividers="false"
      compact-design="false"
      responsive
      no-min-width
      zebra-mode="columns-even"
    >
      <tds-table-header>
        <tds-header-cell
          cell-key="truck"
          cell-value="Truck type"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="driver"
          cell-value="Driver name"
        ></tds-header-cell>
        <tds-header-cell
          cell-key="country"
          cell-value="Country"
        ></tds-header-cell>
        <tds-header-cell
          text-align="right"
          cell-key="mileage"
          cell-value="Mileage"
        ></tds-header-cell>
      </tds-table-header>
      <tds-table-body>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Sweden"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="4000"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Germany"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="260"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Norway"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="5889"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>

        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Denmark"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="1234"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Finland"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="4321"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Iceland"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="5678"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="France"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="8765"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Italy"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="6789"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Spain"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="9876"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
        <tds-table-body-row>
          <tds-body-cell cell-key="truck">
            <div>This colum uses slots.</div>
          </tds-body-cell>
          <tds-body-cell
            cell-value="This column uses the cell value prop."
            cell-key="driver"
          ></tds-body-cell>
          <tds-body-cell
            cell-value="Portugal"
            cell-key="country"
          ></tds-body-cell>
          <tds-body-cell
            text-align="right"
            cell-value="3456"
            cell-key="mileage"
          ></tds-body-cell>
        </tds-table-body-row>
      </tds-table-body>
    </tds-table>
  `,
  styles: [``],
  standalone: true,
  imports: [CommonModule, TegelModule],
})
export class ZebraTableComponent {}
