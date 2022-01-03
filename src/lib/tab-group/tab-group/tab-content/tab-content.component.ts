import {Component, ComponentFactoryResolver, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Tab} from '../tab';
import {TabContentDirective} from '../../tab-content.directive';
import {TabContent} from '../../tab-content';

@Component({
  selector: 'lib-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css']
})
export class TabContentComponent<T> implements OnInit {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) { }

  @ViewChild("tabContent")
  tabContent: ElementRef;

  @ViewChild(TabContentDirective, {static: true})
  tabHost: TabContentDirective;

  @Input()
  tab: Tab<T>;

  ngOnInit(): void {
    if (this.tab?.content) {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.tab.content);
      let viewContainerRef = this.tabHost.viewContainerRef;
      viewContainerRef.clear();
      let componentRef = viewContainerRef.createComponent<TabContent<T>>(componentFactory);
      let tabContentInstance = componentRef.instance;
      tabContentInstance.tab = this.tab
    }
  }

}
