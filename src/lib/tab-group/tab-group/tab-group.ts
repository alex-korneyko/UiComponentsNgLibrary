import {Tab} from './tab';
import {Size} from '../../size.enum';
import {ColorStyle} from '../../color-style.enum';
import {TabGroupComponent} from './tab-group.component';
import {Type} from '@angular/core';

export class TabGroup {
  private _tabs = new Array<Tab>()
  private _size: Size;
  private _color: ColorStyle;
  private _component: TabGroupComponent;

  get tabs(): Tab[] {
    return this._tabs;
  }

  get size(): Size {
    return this._size;
  }

  get color(): ColorStyle {
    return this._color;
  }

  get component(): TabGroupComponent {
    return this._component;
  }

  set component(value: TabGroupComponent) {
    this._component = value;
  }

  AddTab(tab: Tab): TabGroup {
    this._tabs.push(tab);
    return this;
  }

  SetSize(size: Size): TabGroup {
    this._size = size;
    return this;
  }

  SetColor(color: ColorStyle): TabGroup {
    this._color = color;
    return this;
  }

  GetTabBuilder(): TabBuilder {
    return new TabBuilder(this);
  }

  ActivateTab<T>(tab: Tab) {
    tab.SetActive();
    let componentFactory = this.component.componentFactoryResolver.resolveComponentFactory(tab.content);
    let viewContainerRef = this.component.tabContentHost.viewContainerRef;
    viewContainerRef.clear();
    viewContainerRef.createComponent(componentFactory);
  }
}

class TabBuilder {
  private readonly _tabGroup: TabGroup;

  constructor(tabGroup: TabGroup) {
    this._tabGroup = tabGroup;
  }

  Build<T>(title: string, content: Type<any>): Tab {
    return new Tab(title, content, this._tabGroup);
  }
}
