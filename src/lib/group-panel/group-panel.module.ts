import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupPanelComponent } from './group-panel/group-panel.component';
import {FormsModule} from '@angular/forms';
import {InputTitleModule} from '../common/input-title/input-title-module';



@NgModule({
  declarations: [
    GroupPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTitleModule
  ],
  exports: [
    GroupPanelComponent
  ]
})
export class GroupPanelModule { }
