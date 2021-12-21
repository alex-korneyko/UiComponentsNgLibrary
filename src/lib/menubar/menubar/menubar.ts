import {MenubarItem} from './menubar-item/menubar-item';
import {Size} from '../../size.enum';
import {ColorStyle} from '../../color-style.enum';

export class Menubar {
  private _menuItems = new Array<MenubarItem>()
  private _size: Size;
  private _color: ColorStyle;
  private _isActive = false;

  get menuItems(): MenubarItem[] {
    return this._menuItems;
  }

  get size(): Size {
    return this._size;
  }

  get color(): ColorStyle {
    return this._color;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  set isActive(value: boolean) {
    this._isActive = value;
  }

  AddItem(menubarItem: MenubarItem): Menubar {
    menubarItem.menubar = this;
    menubarItem.SetSize(this._size);
    menubarItem.SetColor(menubarItem.color ?? this._color);
    this._menuItems.push(menubarItem);
    return this;
  }

  SetSize(size: Size): Menubar {
    this._size = size;
    this._menuItems.forEach(item => item.SetSize(item.size ?? size));
    return this;
  }

  SetColor(color: ColorStyle): Menubar {
    this._color = color;
    this._menuItems.forEach(item => item.SetColor(item.color ?? color));
    return this;
  }
}
