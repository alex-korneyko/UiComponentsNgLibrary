import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabHeaderComponent } from './tab-group/tab-header/tab-header.component';
import { TabHeaderItemComponent } from './tab-group/tab-header/tab-header-item/tab-header-item.component';
import { TabContentDirective } from './tab-content.directive';
import { TabContentComponent } from './tab-group/tab-content/tab-content.component';



@NgModule({
  declarations: [
    TabGroupComponent,
    TabHeaderComponent,
    TabHeaderItemComponent,
    TabContentDirective,
    TabContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabGroupComponent
  ]
})
export class TabGroupModule { }
