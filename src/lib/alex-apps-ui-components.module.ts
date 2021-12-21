import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {ButtonModule} from './button/button.module';
import {SideMenuModule} from './side-menu/side-menu.module';
import {TextInputModule} from './text-input/text-input.module';
import {TextAreaModule} from './text-area/text-area.module';
import {DropdownSelectModule} from './select/dropdown-select/dropdown-select.module';
import {MultiSelectModule} from './select/multi-select/multi-select.module';
import {CheckboxModule} from './checkbox/checkbox.module';
import {RadioModule} from './radio/radio.module';
import {RangeModule} from './range/range.module';
import {GroupPanelModule} from './group-panel/group-panel.module';
import {DropdownMenuModule} from './dropdown-menu/dropdown-menu.module';
import {TableModule} from './table/table.module';
import {DropdownModule} from './dropdown/dropdown.module';
import {MenubarModule} from './menubar/menubar.module';
import {TabGroupModule} from './tab-group/tab-group.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    SideMenuModule,
    TextInputModule,
    TextAreaModule,
    DropdownSelectModule,
    MultiSelectModule,
    CheckboxModule,
    RadioModule,
    RangeModule,
    GroupPanelModule,
    DropdownModule,
    DropdownMenuModule,
    TableModule,
    MenubarModule,
    TabGroupModule
  ]
})
export class AlexAppsUiComponentsModule { }
