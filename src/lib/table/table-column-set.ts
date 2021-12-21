import {TableColumn} from './table-column';
import {Table} from './table';
import {TableData} from './table-data';

export class TableColumnSet<T extends TableData> {
  private _columns = new Array<TableColumn<T>>();
  private _table: Table<T>

  get columns(): TableColumn<T>[] {
    return this._columns
      .sort((column1, column2) => {
        return  column1.columnIndex > column2.columnIndex ? 1 : column1.columnIndex < column2.columnIndex ? -1 : 0
      });
  }

  get table(): Table<T> {
    return this._table;
  }

  set table(value: Table<T>) {
    this._table = value;
  }

  AddColumn(column: TableColumn<T>): TableColumnSet<T> {
    column.columnSet = this;
    column.columnIndex = this._columns.length;
    this._columns.push(column);
    if (!column.hidden) {
      this.ResizeColumns();
    }

    return this;
  }

  InsertColumn(column: TableColumn<T>, index: number): TableColumnSet<T> {
    this._columns.splice(index, 0, column);
    // this.ResizeColumns();

    return this;
  }

  RemoveColumn(column: TableColumn<any>) {
    let index = this.GetColumnIndex(column);
    if (index > -1) {
      this._columns.splice(index, 1);
    }
  }

  GetColumnIndex(column: TableColumn<any>): number {
    return this._columns.findIndex(clmn => clmn === column);
  }

  ResizeColumns() {
    let zeroWidthColumn: TableColumn<any>;
    let visibleColumnsCountWithoutNew = 0;
    let widthSum = 0;
    let coefficient = 1;

    this._columns.forEach(column => {
      if (!column.hidden) {
        widthSum += column.columnWidthPercent;

        if (column.columnWidthPercent === 0) {
          zeroWidthColumn = column;
        } else {
          visibleColumnsCountWithoutNew++;
        }
      } else {
        column.SetWidthPercent(0);
      }
    });

    let zeroColumnWidthPercent = 100 / (visibleColumnsCountWithoutNew + 1);

    if (zeroWidthColumn) {
      coefficient = (100 - zeroColumnWidthPercent) / 100;
    } else {
      coefficient = (1 / visibleColumnsCountWithoutNew) + 1;
    }

    this._columns.forEach(column => {
      if (!column.hidden) {
        if (column.columnWidthPercent === 0) {
          column.SetWidthPercent(zeroColumnWidthPercent);
        } else {
          column.SetWidthPercent(column.columnWidthPercent * coefficient);
        }
      }
    });

    widthSum = 0;
    this._columns.filter(column => !column.hidden).forEach(column => widthSum += column.columnWidthPercent);

    if (widthSum < 99.99 || widthSum > 100) {
      coefficient = 100 / widthSum;
      this._columns.forEach(column => {
        if (!column.hidden) {
          column.SetWidthPercent(column.columnWidthPercent * coefficient);
        }
      })
    }
  }

  MoveColumnToLeft(column: TableColumn<any>) {
    let index = this._columns.findIndex(clmn => clmn === column);
    if (index > 0) {
      let tmpColumn = this._columns[index];
      this._columns.splice(index, 1)
      this._columns.splice(index - 1, 0, tmpColumn);
    }
  }

  MoveColumnToRight(column: TableColumn<any>) {
    let index = this._columns.findIndex(clmn => clmn === column);
    if (index > -1 && index < this._columns.length - 1) {
      let tmpColumn = this._columns[index];
      this._columns.splice(index, 1);
      this._columns.splice(index + 1, 0, tmpColumn);
    }
  }

  ColumnIsFirstVisible(tableColumn: TableColumn<any>): boolean {
    let index = this.GetColumnIndex(tableColumn);
    if (index === -1) return false;

    let isVisibleFirst = true;

    for (let i = index - 1; i >= 0; i--) {
      isVisibleFirst = isVisibleFirst && this._columns[i].hidden;
    }

    return isVisibleFirst;
  }

  ColumnIsLastVisible(tableColumn: TableColumn<T>): boolean {
    let index = this.GetColumnIndex(tableColumn);
    if (index === -1) return false;

    let isVisibleLast = true;

    for (let i = index + 1; i < this._columns.length; i++) {
      isVisibleLast = isVisibleLast && this._columns[i].hidden;
    }

    return isVisibleLast;
  }
}
