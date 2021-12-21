import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar/menubar.component';
import { MenubarItemComponent } from './menubar/menubar-item/menubar-item.component';
import {DropdownMenuModule} from '../dropdown-menu/dropdown-menu.module';



@NgModule({
  declarations: [
    MenubarComponent,
    MenubarItemComponent
  ],
  imports: [
    CommonModule,
    DropdownMenuModule
  ],
  exports: [
    MenubarComponent
  ]
})
export class MenubarModule { }
