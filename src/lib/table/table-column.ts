import {SortDirection} from './sort-direction.enum';
import {TableColumnSet} from './table-column-set';
import {TableData} from './table-data';
import {ColumnType} from "./column-type";

export class TableColumn<T extends TableData> {
  private readonly _columnName: string;
  private _columnIndex: number;
  private _columnSet: TableColumnSet<T>
  private _prompt: string;
  private readonly _value: (data: T) => any;
  private _columnWidthPercent = 0;
  private _sortDirection: SortDirection = SortDirection.None;
  private _hidden = false;
  private _columnType = ColumnType.String;

  constructor(columnName: string, value: (data: T) => any) {
    this._columnName = columnName;
    this._value = value;
  }

  SetWidthPercent(width: number): TableColumn<T> {
    this._columnWidthPercent = width;
    return this;
  }

  SetColumnType(type: ColumnType): TableColumn<T> {
    this._columnType = type;
    return this;
  }

  get columnType(): ColumnType {
    return this._columnType
  }

  get columnName(): string {
    return this._columnName;
  }

  get columnIndex(): number {
    return this._columnIndex;
  }

  set columnIndex(value: number) {
    this._columnIndex = value;
  }

  get columnSet(): TableColumnSet<T> {
    return this._columnSet;
  }

  set columnSet(value: TableColumnSet<T>) {
    this._columnSet = value;
  }

  get value(): (data: T) => any {
    return this._value;
  }

  get columnWidthPercent(): number {
    return this._columnWidthPercent;
  }

  set columnWidthPercent(value: number) {
    this._columnWidthPercent = value;
  }

  get prompt(): string {
    return this._prompt;
  }

  get hidden(): boolean {
    return this._hidden;
  }

  SetPrompt(prompt: string): TableColumn<T> {
    this._prompt = prompt;
    return this;
  }

  SetHidden(value = true): TableColumn<T> {
    this._hidden = value;
    return this;
  }

  get sortDirection(): SortDirection {
    return this._sortDirection;
  }

  set sortDirection(value: SortDirection) {
    this._sortDirection = value;
  }

  IncreaseWidth(percent: number) {
    this._columnWidthPercent += percent;
  }

  DecreaseWidth(percent: number) {
    this._columnWidthPercent -= percent;
  }

  IsFistVisible(): boolean {
    return this.columnSet.ColumnIsFirstVisible(this);
  }

  IsLastVisible(): boolean {
    return this.columnSet.ColumnIsLastVisible(this);
  }
}
