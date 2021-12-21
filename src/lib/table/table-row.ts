import {TableColumnSet} from './table-column-set';
import {TableRowItem} from './table-row-item';
import {TableColumn} from './table-column';
import {TableData} from './table-data';


export class TableRow<T extends TableData> {
  private readonly _rowItems = new Array<TableRowItem>()
  private readonly _dataItem: T;
  private _hidden = false;
  private _columnSet: TableColumnSet<T>;

  constructor(dataItem: T, columnSet: TableColumnSet<T>) {
    this._dataItem = dataItem;
    this._columnSet = columnSet;
    columnSet.columns.forEach(column => {
      let value = column.value(dataItem);
      this._rowItems.push(new TableRowItem(value, column));
    })
  }

  get rowItems(): TableRowItem[] {
    this._rowItems.sort((item1, item2) => {
      let column1index = this._columnSet.columns.findIndex(column => column === item1.column);
      let column2index = this._columnSet.columns.findIndex(column => column === item2.column);

      return column1index > column2index ? 1 : column1index < column2index ? -1 : 0;
    })

    return this._rowItems;
  }

  get dataItem(): T {
    return this._dataItem;
  }

  get hidden(): boolean {
    return this._hidden;
  }

  SetHidden(value = true) {
    this._hidden = value;
  }

  GetRowItem(column: TableColumn<T>): TableRowItem {
    let index = this._rowItems.findIndex(item => item.column === column);
    if (index > -1) {
      return this._rowItems[index];
    }

    return null;
  }
}
