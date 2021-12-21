import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {TableColumn} from '../../../table-column';
import {SortDirection} from '../../../sort-direction.enum';

@Component({
  selector: 'bs-table-header-item',
  templateUrl: './table-header-item.component.html',
  styleUrls: [
    './table-header-item.component.css',
    '../../../../../styles/bs-variables.css'
  ]
})
export class TableHeaderItemComponent implements OnInit {

  @Input()
  column: TableColumn<any>

  @Input()
  isFirst: boolean;

  @Input()
  isLast: boolean;

  @Output()
  headerColumnClick = new EventEmitter<TableColumn<any>>();

  @Output()
  bsDragStart = new EventEmitter<TableColumn<any>>();

  @Output()
  columnStartResize = new EventEmitter<{column: TableColumn<any>, side: string}>();

  @Output()
  columnEndResize = new EventEmitter();

  @Output()
  resizeOverColumn = new EventEmitter<TableColumn<any>>();

  sortDirectionEnum = SortDirection;

  draggingColumn: TableColumn<any>
  resizingSide = "none";

  constructor() { }

  ngOnInit(): void {
  }

  TableHeaderClick() {
    this.headerColumnClick.emit(this.column);
  }

  ColumnDragStart(event: DragEvent) {
    event.stopPropagation();
    this.bsDragStart.emit(this.column);
  }

  ResizeDragStart(side: string, event: DragEvent) {
    // event.stopPropagation();

    this.columnStartResize.emit({column: this.column, side})
  }

  ResizeDragEnd() {
    this.columnEndResize.emit();
  }

  DragOverHandler(event: DragEvent) {
    // event.stopPropagation();

    this.resizeOverColumn.emit(this.column);
  }
}
