import {Size} from '../../size.enum';
import {ColorStyle} from '../../color-style.enum';

export class Button {

  constructor(title: string, clickHandler: (data: any) => void) {
    this._title = title;
    this._clickHandler = clickHandler;
  }

  private readonly _title: string;
  private readonly _clickHandler: (data: any) => void;
  private _size: Size;
  private _color: ColorStyle = ColorStyle.Grey;
  private _width = "auto"
  private _disabled = false;
  private _data: any

  get title(): string {
    return this._title;
  }

  get clickHandler(): (data: any) => void {
    return this._clickHandler;
  }

  get size(): Size {
    return this._size;
  }

  get color(): ColorStyle {
    return this._color;
  }

  get width(): string {
    return this._width;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  get data(): any {
    return this._data;
  }

  setSize(size: Size): Button {
    this._size = size;
    return this;
  }

  setColor(color: ColorStyle): Button {
    this._color = color;
    return this;
  }

  setWidth(width: string): Button {
    this._width = width;
    return this;
  }

  setDisabled(disabled = true): Button {
    this._disabled = disabled;
    return this;
  }

  addData(data: any): Button {
    this._data = data;
    return this;
  }
}
