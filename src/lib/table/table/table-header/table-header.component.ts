import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Size} from '../../../size.enum';
import {ColorStyle} from '../../../color-style.enum';
import {TableColumn} from '../../table-column';
import {DropdownDirection} from '../../../dropdown/dropdown-direction.enum';
import {DropdownEventType} from '../../../dropdown/dropdown-event-type.enum';
import {TableSettingsComponent} from './table-settings/table-settings.component';
import {Table} from '../../table';

@Component({
  selector: 'bs-table-header',
  templateUrl: './table-header.component.html',
  styleUrls: [
    './table-header.component.css',
    '../../../../styles/bs-variables.css'
  ]
})
export class TableHeaderComponent implements OnInit {

  @Input()
  table: Table<any>

  @Input()
  size: Size;

  @Input()
  color: ColorStyle;

  @Input()
  enableSettings: boolean;

  @Input()
  closeEvents = new Array<Array<() => void>>()

  @Output()
  headerColumnClick = new EventEmitter<TableColumn<any>>();

  readonly resizeStep = 0.4;
  dragColumn: TableColumn<any>

  tableSettingsComponent = TableSettingsComponent;
  sizeEnum = Size;
  dropdownDirectionEnum = DropdownDirection;
  dropdownEventTypeEnum = DropdownEventType;

  resizedColumnParams: {column: TableColumn<any>, side: string};

  constructor() {
  }

  ngOnInit(): void {
  }

  HeaderColumnClickHandler(column: TableColumn<any>) {
    this.headerColumnClick.emit(column);
  }

  DropHandler(column: TableColumn<any>) {
    if (this.dragColumn == null || this.dragColumn === column) {
      return;
    }

    let tmpIndex = this.dragColumn.columnIndex;
    this.dragColumn.columnIndex = column.columnIndex;
    column.columnIndex = tmpIndex;

    this.table.SaveSettings();
  }

  DragStart(column: TableColumn<any>) {
    this.dragColumn = column;
  }

  DragEnd() {
    this.dragColumn = null;
  }

  ColumnStartResize(event: { column: TableColumn<any>; side: string }) {
    this.resizedColumnParams = event;
  }

  ColumnEndResize() {
    this.resizedColumnParams = null;
    this.table.SaveSettings();
  }

  ColumnResize(column: TableColumn<any>) {

    if (this.resizedColumnParams == null || this.dragColumn != null) return;

    if (this.resizedColumnParams.column === column) {
      let activeColumnIndex = this.table.columnSet.GetColumnIndex(column);
      let increasedColumn: TableColumn<any>;

      switch (this.resizedColumnParams.side) {
        case 'right': {
          let increasedColumnIndex = activeColumnIndex + 1;
          increasedColumn = this.table.columnSet.columns[increasedColumnIndex];
          while (increasedColumn.hidden) {
            increasedColumn = this.table.columnSet.columns[++increasedColumnIndex];
            if (increasedColumn == null) {
              return;
            }
          }
          break;
        }
        case 'left': {
          let increasedColumnIndex = activeColumnIndex - 1;
          increasedColumn = this.table.columnSet.columns[increasedColumnIndex];
          while (increasedColumn.hidden) {
            increasedColumn = this.table.columnSet.columns[--increasedColumnIndex];
            if (increasedColumn == null) {
              return;
            }
          }
          break;
        }
      }
      column.DecreaseWidth(this.resizeStep);
      increasedColumn.IncreaseWidth(this.resizeStep);
    } else {
      this.resizedColumnParams.column.IncreaseWidth(this.resizeStep);
      column.DecreaseWidth(this.resizeStep);
    }
  }

  DragEnterHandler(column: TableColumn<any>) {

  }
}
