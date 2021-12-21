import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SizeDirective} from './size.directive';
import { ColorDirective } from './color.directive';



@NgModule({
  declarations: [
    SizeDirective,
    ColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SizeDirective,
    ColorDirective
  ]
})
export class DirectivesModule { }
