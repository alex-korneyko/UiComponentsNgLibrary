import {Type} from '@angular/core';

export class SideMenuItemParam {
  menuItemComponent: Type<any>;
  menuItemTitle: string;
  children = new Array<SideMenuItemParam>();
  isDisabled = false;

  constructor(menuItemTitle: string, menuItemComponent: Type<any>, children?: SideMenuItemParam[]) {
    this.menuItemComponent = menuItemComponent;
    this.menuItemTitle = menuItemTitle;
    this.children = children;
  }

  disabled(): SideMenuItemParam {
    this.isDisabled = true;
    return this;
  }

  enabled(): SideMenuItemParam {
    this.isDisabled = false;
    return this;
  }
}
