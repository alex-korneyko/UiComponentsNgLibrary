import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {TableRow} from '../../table-row';
import {Size} from '../../../size.enum';
import {ColorStyle} from '../../../color-style.enum';
import {TableData} from '../../table-data';

@Component({
  selector: 'bs-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: [
    './table-row.component.css',
    '../../../../styles/bs-variables.css'
  ]
})
export class TableRowComponent<T extends TableData> implements OnInit {

  @Input()
  tableRow: TableRow<T>

  @Input()
  size: Size

  @Input()
  color: ColorStyle

  @Input()
  isSelected: boolean;

  @Output()
  rowClick = new EventEmitter<{tableRow: TableRow<T>, event: MouseEvent}>();

  @Output()
  dblRowClick = new EventEmitter<{tableRow: TableRow<T>, event: MouseEvent}>();

  sizeEnum = Size;

  constructor() { }

  ngOnInit(): void {
  }

  RowClick(event: MouseEvent) {
    this.rowClick.emit({tableRow: this.tableRow, event})
  }

  DblRowClick(event: MouseEvent) {
    this.dblRowClick.emit({tableRow: this.tableRow, event})
  }
}
