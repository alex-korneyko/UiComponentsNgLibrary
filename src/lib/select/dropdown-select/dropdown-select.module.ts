import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownSelectComponent } from './dropdown-select/dropdown-select.component';
import {InputTitleModule} from '../../common/input-title/input-title-module';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    DropdownSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTitleModule
  ],
  exports: [
    DropdownSelectComponent
  ]
})
export class DropdownSelectModule { }
