import {SortDirection} from './sort-direction.enum';
import {TableColumn} from './table-column';

export class TableSettings {
  name: string;
  columns = new Array<ColumnSettings>();

  constructor(name: string) {
    this.name = name;
  }

  AddColumnSettings(columnSettings: ColumnSettings): TableSettings {
    this.columns.push(columnSettings);
    return this;
  }
}

export class ColumnSettings {
  name: string;
  index: number;
  hidden: boolean;
  width: number;
  sort: SortDirection;

  constructor(tableColumn: TableColumn<any>) {
    this.name = tableColumn.columnName;
    this.index = tableColumn.columnIndex;
    this.hidden = tableColumn.hidden;
    this.width = tableColumn.columnWidthPercent;
    this.sort = tableColumn.sortDirection;
  }
}