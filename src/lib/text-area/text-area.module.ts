import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaComponent } from './text-area/text-area.component';
import {FormsModule} from '@angular/forms';
import {InputTitleModule} from '../common/input-title/input-title-module';



@NgModule({
  declarations: [
    TextAreaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTitleModule,
  ],
  exports: [
    TextAreaComponent
  ]
})
export class TextAreaModule { }
