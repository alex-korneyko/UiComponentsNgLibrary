import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownContentDirective } from './dropdown-content.directive';
import { DropdownDirective } from './dropdown.directive';
import { DropdownComponent } from './dropdown/dropdown.component';



@NgModule({
  declarations: [
    DropdownContentDirective,
    DropdownDirective,
    DropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DropdownDirective,
    DropdownComponent
  ]
})
export class DropdownModule { }
