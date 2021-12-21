import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table/table-row/table-row.component';
import { TableRowItemComponent } from './table/table-row/table-row-item/table-row-item.component';
import { TableHeaderComponent } from './table/table-header/table-header.component';
import { TableHeaderItemComponent } from './table/table-header/table-header-item/table-header-item.component';
import {FormsModule} from '@angular/forms';
import {CheckboxModule} from '../checkbox/checkbox.module';
import {DropdownMenuModule} from '../dropdown-menu/dropdown-menu.module';
import {DropdownModule} from '../dropdown/dropdown.module';
import {TableSettingsComponent} from './table/table-header/table-settings/table-settings.component';
import {DirectivesModule} from '../directives/directives.module';
import {GroupPanelModule} from '../group-panel/group-panel.module';




@NgModule({
  declarations: [
    TableComponent,
    TableRowComponent,
    TableRowItemComponent,
    TableHeaderComponent,
    TableHeaderItemComponent,
    TableSettingsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CheckboxModule,
    DropdownMenuModule,
    DropdownModule,
    DirectivesModule,
    GroupPanelModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
