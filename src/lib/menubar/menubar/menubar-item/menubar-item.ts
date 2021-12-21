import {DropdownMenu} from '../../../dropdown-menu/dropdown-menu/dropdown-menu-component/dropdown-menu';
import {Menubar} from '../menubar';
import {ColorStyle} from '../../../color-style.enum';
import {Size} from '../../../size.enum';

export class MenubarItem {
  private readonly _title: string;
  private readonly _dropdownMenu: DropdownMenu<any>
  private _menubar: Menubar;

  constructor(title: string, dropdownMenu: DropdownMenu<any>) {
    this._title = title;
    this._dropdownMenu = dropdownMenu;
  }

  get title(): string {
    return this._title;
  }

  get dropdownMenu(): DropdownMenu<any> {
    return this._dropdownMenu;
  }

  get menubar(): Menubar {
    return this._menubar;
  }

  set menubar(value: Menubar) {
    this._menubar = value;
  }

  get size(): Size {
    return this._dropdownMenu.size;
  }

  get color(): ColorStyle {
    return this._dropdownMenu.color;
  }

  SetColor(color: ColorStyle): MenubarItem {
    this._dropdownMenu.SetColor(color);
    return this;
  }

  SetSize(size: Size): MenubarItem {
    this._dropdownMenu.SetSize(size);
    return this;
  }
}
