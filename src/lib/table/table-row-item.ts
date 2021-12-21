import {TableColumn} from './table-column';

export class TableRowItem {
  private readonly _value: string;
  private readonly _column: TableColumn<any>

  constructor(value: string, column: TableColumn<any>) {
    this._value = value;
    this._column = column;
  }

  get value(): string {
    return this._value;
  }

  get column(): TableColumn<any> {
    return this._column;
  }
}
