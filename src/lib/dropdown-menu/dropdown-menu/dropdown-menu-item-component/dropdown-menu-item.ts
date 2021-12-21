import {DropdownMenu} from '../dropdown-menu-component/dropdown-menu';
import {Size} from '../../../size.enum';
import {ColorStyle} from '../../../color-style.enum';

export class DropdownMenuItem<T> {
  private readonly _tile: string;
  private readonly _icon: string;
  private _parentMenu: DropdownMenu<T>
  private _innerMenu: DropdownMenu<T>
  private _action: (data: T) => void;
  private _size: Size;
  private _color: ColorStyle;
  private _bottomDivider = false;
  private _disabled = (data: T): boolean => {return false};
  private _hidden = (data: T): boolean => {return false};

  constructor(tile: string, icon?: string) {
    this._tile = tile;
    this._icon = icon ?? "";
  }

  get tile(): string {
    return this._tile;
  }

  get icon(): string {
    return this._icon;
  }

  get parentMenu(): DropdownMenu<T> {
    return this._parentMenu;
  }

  set parentMenu(value: DropdownMenu<T>) {
    this._parentMenu = value;
  }

  get innerMenu(): DropdownMenu<T> {
    return this._innerMenu;
  }

  get action(): (data: T) => void {
    return this._action;
  }

  get size(): Size {
    return this._size;
  }

  get color(): ColorStyle {
    return this._color;
  }

  get bottomDivider(): boolean {
    return this._bottomDivider;
  }

  get disabled(): (data: T) => boolean {
    return this._disabled;
  }

  get hidden(): (data: T) => boolean {
    return this._hidden;
  }

  AddInnerMenu = (dropdownMenu: DropdownMenu<T>): DropdownMenuItem<T> => {
    dropdownMenu.parentMenu = this.parentMenu;
    dropdownMenu.SetColor(dropdownMenu.color ?? this.color);
    dropdownMenu.SetSize(dropdownMenu.size ?? this.size);
    this._innerMenu = dropdownMenu;
    return this;
  }

  AddAction(action: (data: T) => void): DropdownMenuItem<T> {
    this._action = action;
    return this;
  }

  SetSize(size: Size): DropdownMenuItem<T> {
    this._size = size;
    this.innerMenu?.SetSize(size);
    return this;
  }

  SetColor(color: ColorStyle): DropdownMenuItem<T> {
    this._color = color;
    this.innerMenu?.SetColor(color);
    return this;
  }

  SetBottomDivider(value = true): DropdownMenuItem<T> {
    this._bottomDivider = value;
    return this;
  }

  AddDisableDeterminant(func: (data: T) => boolean): DropdownMenuItem<T> {
    this._disabled = func;
    return this;
  }

  AddHideDeterminant(func: (data: T) => boolean): DropdownMenuItem<T> {
    this._hidden = func;
    return this;
  }
}
