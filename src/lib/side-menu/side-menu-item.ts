import {Type} from '@angular/core';

export class SideMenuItem {
  menuItemComponent: Type<any>;
  menuItemTitle: string;
  children = new Array<SideMenuItem>();
  isDisabled = false;

  constructor(menuItemTitle: string, menuItemComponent: Type<any>, children?: SideMenuItem[]) {
    this.menuItemComponent = menuItemComponent;
    this.menuItemTitle = menuItemTitle;
    this.children = children;
  }

  disabled(): SideMenuItem {
    this.isDisabled = true;
    return this;
  }

  enabled(): SideMenuItem {
    this.isDisabled = false;
    return this;
  }
}
