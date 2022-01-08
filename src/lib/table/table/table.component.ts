import {Component, Input, OnInit, Output, EventEmitter, Type} from '@angular/core';
import {Table} from '../table';
import {TableColumn} from '../table-column';
import {TableRow} from '../table-row';
import {TableData} from '../table-data';
import {IDropdownContent} from '../../dropdown/idropdown-content';
import {DropdownDirection} from '../../dropdown/dropdown-direction.enum';
import {DropdownEventType} from '../../dropdown/dropdown-event-type.enum';
import {DropdownMenu} from '../../dropdown-menu/dropdown-menu/dropdown-menu-component/dropdown-menu';

@Component({
  selector: 'bs-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent<T extends TableData> implements OnInit {

  @Input()
  table: Table<T>

  @Input()
  selectedData = new Array<T>();

  @Output()
  selectedDataChange = new EventEmitter<Array<T>>();

  @Output()
  dblRowClick = new EventEmitter<{ data: T, event: MouseEvent }>();

  @Input()
  dropdownMenu: DropdownMenu<T>

  @Input()
  dropdownContent: Type<IDropdownContent<T>>;

  dropdownDirection: DropdownDirection
  dropdownEventType = DropdownEventType

  constructor() { }

  ngOnInit(): void {
  }

  HeaderColumnClickHandler(column: TableColumn<any>) {
    this.table.NewDirectionResort(column);
    this.table.SaveSettings();
  }

  RowClickHandler(event: { tableRow: TableRow<T>; event: MouseEvent }) {
    let selectedData = this.table.RowClickHandler(event.tableRow, event.event);
    this.selectedDataChange.emit(selectedData);
  }

  DblRowClickHandler(event: { tableRow: TableRow<T>; event: MouseEvent }) {
    this.dblRowClick.emit({data: event.tableRow.dataItem, event: event.event});
  }

  rightClickHandler(row: TableRow<T>) {
    this.table.selectedData.splice(0, this.table.selectedData.length)
    this.table.selectedData.push(row.dataItem);
  }

  tableDataContainerClick($event: MouseEvent) {
    // $event.stopPropagation();
    this.table.selectedData.splice(0, this.table.selectedData.length)
  }
}
