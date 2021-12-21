import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from '../dropdown/dropdown.module';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu-component/dropdown-menu.component';
import { DropdownMenuDirective } from './dropdown-menu/dropdown-menu.directive';
import { DropdownMenuItemComponent } from './dropdown-menu/dropdown-menu-item-component/dropdown-menu-item.component';
import { DropdownMenuContentComponent } from './dropdown-menu/dropdown-menu-component/dropdown-menu-content/dropdown-menu-content.component';
import { DropdownMenuItemContentComponent } from './dropdown-menu/dropdown-menu-item-component/dropdown-menu-item-content/dropdown-menu-item-content.component';



@NgModule({
  declarations: [
    DropdownMenuComponent,
    DropdownMenuDirective,
    DropdownMenuItemComponent,
    DropdownMenuContentComponent,
    DropdownMenuItemContentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule
  ],
  exports:[
    DropdownMenuDirective,
    DropdownMenuComponent
  ]
})
export class DropdownMenuModule { }
