import {Component, ComponentFactoryResolver, ElementRef, Input, Output, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {TabGroup} from './tab-group';
import {TabContentDirective} from '../tab-content.directive';
import {Tab} from './tab';

@Component({
  selector: 'bs-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {

  @ViewChild("tabContent")
  tabContentContainer: ElementRef;

  @ViewChild(TabContentDirective, {static: true})
  tabContentHost: TabContentDirective;

  @Input() tabGroup: TabGroup;

  @Output() onActiveTab = new EventEmitter<Tab>();

  @Output() onHideTab = new EventEmitter<Tab>();

  constructor(public componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.tabGroup.component = this;
    if (this.tabGroup.tabs.length > 0) {
      this.tabGroup.ActivateTab(this.tabGroup.tabs[0]);
    }
  }



}
