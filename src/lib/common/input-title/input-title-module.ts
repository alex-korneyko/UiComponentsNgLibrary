import {NgModule} from '@angular/core';
import {InputTitleComponent} from './input-title/input-title.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    InputTitleComponent
  ],
  exports: [
    InputTitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class InputTitleModule {
}
