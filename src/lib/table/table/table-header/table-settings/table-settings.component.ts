import { Component, OnInit } from '@angular/core';
import {IDropdownContent} from '../../../../dropdown/idropdown-content';
import {DropdownComponent} from '../../../../dropdown/dropdown/dropdown.component';
import {Table} from '../../../table';
import {TitlePosition} from '../../../../title-position.enum';
import {TableColumn} from '../../../table-column';

@Component({
  selector: 'bs-table-settings',
  templateUrl: './table-settings.component.html',
  styleUrls: [
    './table-settings.component.css',
    '../../../../../styles/bs-variables.css'
  ]
})
export class TableSettingsComponent implements OnInit, IDropdownContent<Table<any>> {

  data: Table<any>;
  dropdownContainerComponent: DropdownComponent<Table<any>>;

  TitlePosition = TitlePosition

  Math = Math;

  constructor() { }

  ngOnInit(): void {
  }

  ChangeHiddenEvent(column: TableColumn<any>, event: boolean) {
    column.SetHidden(!event)
    this.data.columnSet.ResizeColumns();
    this.data.SaveSettings();
  }
}
