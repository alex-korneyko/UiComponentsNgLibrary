import {DropdownMenuItem} from '../dropdown-menu-item-component/dropdown-menu-item';
import {Size} from '../../../size.enum';
import {ColorStyle} from '../../../color-style.enum';
import {DropdownComponent} from '../../../dropdown/dropdown/dropdown.component';

export class DropdownMenu<T> {
  private _menuItems = new Array<DropdownMenuItem<T>>()
  private _parentMenu: DropdownMenu<T>
  private _size: Size;
  private _color: ColorStyle;
  private _dropdownComponent: DropdownComponent<T>

  get menuItems(): DropdownMenuItem<T>[] {
    return this._menuItems;
  }

  get parentMenu(): DropdownMenu<T> {
    return this._parentMenu;
  }

  set parentMenu(value: DropdownMenu<T>) {
    this._parentMenu = value;
  }

  get size(): Size {
    return this._size;
  }

  get color(): ColorStyle {
    return this._color;
  }

  get dropdownComponent(): DropdownComponent<T> {
    return this._dropdownComponent;
  }

  SetDropdownComponent(value: DropdownComponent<T>) {
    this._dropdownComponent = value;
  }

  AddMenuItem(dropdownMenuItem: DropdownMenuItem<T>): DropdownMenu<T> {
    dropdownMenuItem.parentMenu = this;
    dropdownMenuItem.SetColor(dropdownMenuItem.color ?? this.color);
    dropdownMenuItem.SetSize(dropdownMenuItem.size ?? this.size);
    this._menuItems.push(dropdownMenuItem);
    return this;
  }

  SetSize(size: Size): DropdownMenu<T> {
    this._size = size;
    this._menuItems.forEach(item => {
      item.SetSize(item.size ?? size);
    })
    return this;
  }

  SetColor(color: ColorStyle): DropdownMenu<T> {
    this._color = color;
    this._menuItems.forEach(item => {
      item.SetColor(item.color ?? color);
    })
    return this;
  }

  Hide() {
    this._menuItems.forEach(item => {
      item.innerMenu?.Hide()
    })

    this.dropdownComponent?.Hide();
  }
}
