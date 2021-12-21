import {SideMenuItemParam} from './side-menu-item-param';

export class SideMenuListObject {
  sideMenuItemParam: SideMenuItemParam;
  parentMenu: SideMenuListObject;
  children = new Array<SideMenuListObject>()
  nestingLevel: number;
  childrenIsOpen = false;

  constructor(sideMenuItemParam: SideMenuItemParam, nestingLevel: number, parent?: SideMenuListObject) {
    this.sideMenuItemParam = sideMenuItemParam;
    this.nestingLevel = nestingLevel;
    this.parentMenu = parent;
  }
}
