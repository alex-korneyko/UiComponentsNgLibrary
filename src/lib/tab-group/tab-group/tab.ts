import {TabGroup} from './tab-group';
import {ColorStyle} from '../../color-style.enum';
import {Type} from '@angular/core';

export class Tab<T> {
  private readonly _tabGroup: TabGroup<T>;
  private readonly _title: string;
  private readonly _content: Type<any>
  private _color: ColorStyle;
  private _disabled = false;
  private _hidden = false;
  private _iconUSymbol: string;
  private _isActive = false;
  private _tabData: T

  constructor(title: string, content: Type<any>, tabGroup: TabGroup<T>) {
    this._title = title;
    this._tabGroup = tabGroup;
    this._content = content;
  }

  get tabGroup(): TabGroup<T> {
    return this._tabGroup;
  }

  get title(): string {
    return this._title;
  }

  get content(): Type<any> {
    return this._content;
  }

  get color(): ColorStyle {
    return this._color;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  get hidden(): boolean {
    return this._hidden;
  }

  get iconUSymbol(): string {
    return this._iconUSymbol;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  get tabData(): T {
    return this._tabData;
  }

  SetColor(color: ColorStyle): Tab<T> {
    this._color = color;
    return this;
  }

  SetDisabled(value = true): Tab<T> {
    this._disabled = value;
    return this;
  }

  SetHidden(value = true): Tab<T> {
    this._hidden = value;
    return this;
  }

  SetIconUSymbol(uSymbol: string): Tab<T> {
    this._iconUSymbol = uSymbol;
    return this;
  }

  SetActive(value = true): Tab<T> {
    if (value) {
      this._tabGroup.tabs.filter(tab => tab !== this).forEach(tab => tab.SetActive(false));
      this._tabGroup.component.onActiveTab.emit(this);
    } else {
      if (this._isActive) {
        this._tabGroup.component.onHideTab.emit(this);
      }
    }
    this._isActive = value;
    return this;
  }

  SetData(tabData: T): Tab<T> {
    this._tabData = tabData;

    return this;
  }
}
