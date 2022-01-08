import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import {FormsModule} from '@angular/forms';
import {InputTitleModule} from '../common/input-title/input-title-module';
import {ButtonModule} from '../button/button.module';



@NgModule({
  declarations: [
    TextInputComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        InputTitleModule,
        ButtonModule
    ],
  exports: [
    TextInputComponent
  ]
})
export class TextInputModule { }
