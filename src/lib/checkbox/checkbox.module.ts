import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {FormsModule} from '@angular/forms';
import {InputTitleModule} from '../common/input-title/input-title-module';



@NgModule({
  declarations: [
    CheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTitleModule
  ],
  exports: [
    CheckboxComponent
  ]
})
export class CheckboxModule { }
