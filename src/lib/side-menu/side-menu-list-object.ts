import {SideMenuItem} from './side-menu-item';

export class SideMenuListObject {
  sideMenuItemParam: SideMenuItem;
  parentMenu: SideMenuListObject;
  children = new Array<SideMenuListObject>()
  nestingLevel: number;
  childrenIsOpen = false;

  constructor(sideMenuItemParam: SideMenuItem, nestingLevel: number, parent?: SideMenuListObject) {
    this.sideMenuItemParam = sideMenuItemParam;
    this.nestingLevel = nestingLevel;
    this.parentMenu = parent;
  }
}
