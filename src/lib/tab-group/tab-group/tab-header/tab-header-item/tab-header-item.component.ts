import {Component, Input, OnInit} from '@angular/core';
import {Tab} from '../../tab';
import {Size} from '../../../../size.enum';

@Component({
  selector: 'bs-tab-header-item',
  templateUrl: './tab-header-item.component.html',
  styleUrls: [
    './tab-header-item.component.css',
    '../../../../../styles/bs-variables.css'
  ]
})
export class TabHeaderItemComponent implements OnInit {

  @Input() tabHeaderItem: Tab;

  Size = Size;

  constructor() { }

  ngOnInit(): void {
  }

  TabItemClickHandler() {
    this.tabHeaderItem.tabGroup.ActivateTab(this.tabHeaderItem);
  }
}
