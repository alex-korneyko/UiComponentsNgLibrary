import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideMenuComponent} from './side-menu.component';
import {SideMenuItemComponent} from './side-menu-item/side-menu-item.component';
import { SideMenuContainerContentDirective } from './side-menu-container-content.directive';
import { SideMenuItemsListComponent } from './side-menu-items-list/side-menu-items-list.component';
import { DetourMenuElementComponent } from './side-menu-item/detour-menu-element/detour-menu-element.component';
import { LastMenuElementComponent } from './side-menu-item/last-menu-element/last-menu-element.component';
import { MiddleMenuElementComponent } from './side-menu-item/middle-menu-element/middle-menu-element.component';



@NgModule({
  declarations: [
    SideMenuComponent,
    SideMenuItemComponent,
    SideMenuContainerContentDirective,
    SideMenuItemsListComponent,
    DetourMenuElementComponent,
    LastMenuElementComponent,
    MiddleMenuElementComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideMenuComponent
  ]
})
export class SideMenuModule { }
