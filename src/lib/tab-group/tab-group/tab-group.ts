import {Tab} from './tab';
import {Size} from '../../size.enum';
import {ColorStyle} from '../../color-style.enum';
import {TabGroupComponent} from './tab-group.component';
import {Type} from '@angular/core';
import {TabContent} from '../tab-content';

export class TabGroup<T> {
  private _tabs = new Array<Tab<T>>()
  private _size: Size;
  private _color: ColorStyle;
  private _component: TabGroupComponent<T>;

  get tabs(): Tab<T>[] {
    return this._tabs;
  }

  get size(): Size {
    return this._size;
  }

  get color(): ColorStyle {
    return this._color;
  }

  get component(): TabGroupComponent<T> {
    return this._component;
  }

  set component(value: TabGroupComponent<T>) {
    this._component = value;
  }

  AddTab(tab: Tab<T>): TabGroup<T> {
    this._tabs.push(tab);
    return this;
  }

  SetSize(size: Size): TabGroup<T> {
    this._size = size;
    return this;
  }

  SetColor(color: ColorStyle): TabGroup<T> {
    this._color = color;
    return this;
  }

  GetTabBuilder(): TabBuilder<T> {
    return new TabBuilder(this);
  }

  ActivateTab<T>(tab: Tab<T>) {
    tab.SetActive();
  }
}

class TabBuilder<T> {
  private readonly _tabGroup: TabGroup<T>;

  constructor(tabGroup: TabGroup<T>) {
    this._tabGroup = tabGroup;
  }

  Build(title: string, content: Type<TabContent<T>>): Tab<T> {
    return new Tab<T>(title, content, this._tabGroup);
  }
}
