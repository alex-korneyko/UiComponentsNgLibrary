import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SideMenuListObject} from '../side-menu-list-object';
import {Size} from '../../size.enum';

@Component({
  selector: 'bs-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.css']
})
export class SideMenuItemComponent implements OnInit {

  @Input()
  menuItemListObject: SideMenuListObject;

  @Input()
  size: Size;

  @Input()
  isSelected: boolean;

  @Output()
  menuItemClick = new EventEmitter<SideMenuListObject>();

  sizeEnum = Size;

  nestingLevelIterationsCount: any[];

  constructor() {}

  ngOnInit(): void { }

  MenuItemClickHandler() {
    if (this.menuItemListObject.sideMenuItemParam.isDisabled) {
      return;
    }

    this.menuItemClick.emit(this.menuItemListObject);
  }

  InnerMenuChevronClick() {
    if (this.menuItemListObject.sideMenuItemParam.isDisabled) {
      return;
    }

    this.menuItemListObject.childrenIsOpen = !this.menuItemListObject.childrenIsOpen;
    this.CloseChildren(this.menuItemListObject.children);
  }

  private CloseChildren(menuObjects: SideMenuListObject[]) {
    menuObjects.forEach(item => {
      item.childrenIsOpen = false;
      this.CloseChildren(item.children);
    })
  }
}
