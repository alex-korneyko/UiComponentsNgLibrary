import {Component, Input, OnInit} from '@angular/core';
import {TableRowItem} from '../../../table-row-item';

@Component({
  selector: 'bs-table-row-item',
  templateUrl: './table-row-item.component.html',
  styleUrls: [
    './table-row-item.component.css',
    '../../../../../styles/bs-variables.css'
  ]
})
export class TableRowItemComponent implements OnInit {

  @Input()
  tableRowItem: TableRowItem

  @Input()
  isLastItem: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
