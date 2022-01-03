import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import {ButtonModule} from '../button/button.module';



@NgModule({
  declarations: [
    ModalWindowComponent
  ],
    imports: [
        CommonModule,
        ButtonModule
    ],
  exports: [
    ModalWindowComponent
  ]
})
export class ModalWindowModule { }
