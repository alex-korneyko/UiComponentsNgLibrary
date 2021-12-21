import {Size} from '../size.enum';
import {ColorStyle} from '../color-style.enum';
import {SortDirection} from './sort-direction.enum';
import {TableColumnSet} from './table-column-set';
import {TableColumn} from './table-column';
import {TableRow} from './table-row';
import {TableData} from './table-data';
import {ColumnSettings, TableSettings} from './table-settings';

export class Table<T extends TableData> {
  private readonly _tableId: string;
  private readonly _data: Array<T>;
  private _rows = new Array<TableRow<T>>();
  private readonly _columnSet: TableColumnSet<T>;
  private _size: Size;
  private _color: ColorStyle = ColorStyle.SlateGrey;
  private _selectedData = new Array<T>();

  constructor(tableId: string, data: Array<T>, columnSet: TableColumnSet<T>) {
    this._tableId = tableId;
    this._data = data;
    this._columnSet = columnSet;
    this._columnSet.table = this;
    data.forEach(dataItem => {
      let tableRow = new TableRow(dataItem, columnSet);
      this._rows.push(tableRow);
    });
    this.GetSettings();
  }

  get tableId(): string {
    return this._tableId;
  }

  get rows(): TableRow<T>[] {
    return this._rows;
  }

  get columnSet(): TableColumnSet<T> {
    return this._columnSet;
  }

  get size(): Size {
    return this._size;
  }

  get color(): ColorStyle {
    return this._color;
  }

  get selectedData(): T[] {
    return this._selectedData;
  }

  SetSize(size: Size): Table<T> {
    this._size = size;
    return this;
  }

  SetColor(color: ColorStyle): Table<T> {
    this._color = color;
    return this;
  }

  AddData(data: Array<T>) {
    this._data.push(...data);
    data.forEach(dt => {
      this._rows.push(new TableRow<T>(dt, this._columnSet));
    })
    this.Sort()
  }

  RemoveData = (data: Array<T>) => {
    let ids = data.map<number>(dt => dt.id);

    ids.forEach(id => {
      let index = this._data.findIndex(dtInTable => dtInTable.id == id);
      if (index > -1) {
        this._data.splice(index, 1);
        index = this._rows.findIndex(row => row.dataItem.id == id);
        if (index > -1) {
          this._rows.splice(index, 1);
        }
      }
    });

    ids.forEach(id => {
      let index = this._selectedData.findIndex(sdt => sdt.id == id);
      if (index > -1) {
        this._selectedData.splice(index, 1);
      }
    });
  }

  NewDirectionResort(column: TableColumn<T>) {
    this._columnSet.columns.forEach(clmn => clmn !== column ? clmn.sortDirection = SortDirection.None : {});

    switch (column.sortDirection) {
      case SortDirection.None:
        column.sortDirection = SortDirection.ToUp;
        break;
      case SortDirection.ToUp:
        column.sortDirection = SortDirection.ToDown;
        break;
      case SortDirection.ToDown:
        column.sortDirection = SortDirection.None;
    }

    this.Sort(column);
  }

  Sort(column?: TableColumn<T>) {
    if (column == null) {
      let index = this._columnSet.columns.findIndex(clmn => clmn.sortDirection !== SortDirection.None);
      if (index != -1) {
        column = this._columnSet.columns[index];
      } else {
        return;
      }
    }

    if (column.sortDirection === SortDirection.None) {
      this._rows = new Array<TableRow<T>>();
      this._data.forEach(dataItem => {
        let tableRow = new TableRow(dataItem, this._columnSet);
        this._rows.push(tableRow);
      });
      return;
    }

    this._rows.sort((row1, row2) => {
      if (row1.GetRowItem(column).value == null && row2.GetRowItem(column).value != null) {
        return column.sortDirection === SortDirection.ToUp ? -1 : 1;
      }

      if (row1.GetRowItem(column).value != null && row2.GetRowItem(column).value == null) {
        return column.sortDirection === SortDirection.ToUp ? 1 : -1;
      }

      if (row1.GetRowItem(column).value == null && row2.GetRowItem(column).value == null) {
        return 0;
      }

      let type = typeof (row1.GetRowItem(column).value);

      if (column.sortDirection === SortDirection.ToUp) {
        if (type === "string") {
          return row1.GetRowItem(column).value.toUpperCase() > row2.GetRowItem(column).value.toUpperCase() ? 1 :
            row1.GetRowItem(column).value.toUpperCase() < row2.GetRowItem(column).value.toUpperCase() ? -1 : 0;
        }
        return row1.GetRowItem(column).value > row2.GetRowItem(column).value ? 1 :
          row1.GetRowItem(column).value < row2.GetRowItem(column).value ? -1 : 0;
      } else {
        if (type === "string") {
          return row1.GetRowItem(column).value.toUpperCase() < row2.GetRowItem(column).value.toUpperCase() ? 1 :
            row1.GetRowItem(column).value.toUpperCase() > row2.GetRowItem(column).value.toUpperCase() ? -1 : 0;
        }
        return row1.GetRowItem(column).value < row2.GetRowItem(column).value ? 1 :
          row1.GetRowItem(column).value > row2.GetRowItem(column).value ? -1 : 0;
      }
    });
  }

  RowClickHandler(tableRow: TableRow<T>, event: MouseEvent): Array<T> {
    if (!event.ctrlKey && !event.shiftKey) {
      this._selectedData = new Array<T>();
      this._selectedData.push(tableRow.dataItem);
    }

    if (event.ctrlKey && !event.shiftKey) {
      if (this.RowIsSelected(tableRow.dataItem)) {
        let index = this._selectedData.findIndex(dt => dt === tableRow.dataItem);
        this._selectedData.splice(index, 1);
      } else {
        this._selectedData.push(tableRow.dataItem);
      }
    }

    return this._selectedData;
  }

  SelectAll(): Array<T> {
    this._selectedData = new Array(...this._data);
    return this._selectedData;
  }

  RowIsSelected(data: T): boolean {
    let index = this._selectedData.findIndex(dt => dt === data);
    return index > -1;
  }

  private GetSettings() {
    let tableSettingsString = localStorage.getItem(this._tableId);
    let tableSettings: TableSettings;

    if (tableSettingsString == null) {
      this.SaveSettings();
      return;
    } else {
      tableSettings = JSON.parse(tableSettingsString)
      this.SetSettings(tableSettings);
    }
  }

  private SetSettings(tableSettings: TableSettings) {
    this._columnSet.columns.forEach(column => {
      let index = tableSettings.columns.findIndex(columnSettings => columnSettings.name === column.columnName);
      if (index > -1) {
        let colSettings = tableSettings.columns[index];
        column.columnIndex = colSettings.index;
        column.SetHidden(colSettings.hidden);
        column.SetWidthPercent(colSettings.width);
        column.sortDirection = colSettings.sort;
      }
    });
    this.Sort();
  }

  SaveSettings() {
    let tableSettings = new TableSettings(this._tableId)

    this._columnSet.columns.forEach(column => {
      tableSettings.AddColumnSettings(new ColumnSettings(column))
    })

    let stringify = JSON.stringify(tableSettings);

    localStorage.setItem(this._tableId, stringify);
  }
}
