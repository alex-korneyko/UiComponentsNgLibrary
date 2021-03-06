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
  private _disabled: () => boolean = () => false;
  private _data: any
  private _tooltip = ""

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

  get disabled(): () => boolean {
    return this._disabled;
  }

  get data(): any {
    return this._data;
  }

  get tooltip(): string {
    return this._tooltip;
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

  setDisabled(action: () => boolean): Button {
    this._disabled = action;
    return this;
  }

  setData(data: any): Button {
    this._data = data;
    return this;
  }

  setTooltip(tooltip: string): Button {
    this._tooltip = tooltip;
    return this;
  }
}
