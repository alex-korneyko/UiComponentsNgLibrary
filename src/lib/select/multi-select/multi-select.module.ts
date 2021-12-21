import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import {FormsModule} from '@angular/forms';
import {InputTitleModule} from '../../common/input-title/input-title-module';



@NgModule({
  declarations: [
    MultiSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTitleModule
  ], exports: [
    MultiSelectComponent
  ]
})
export class MultiSelectModule { }
