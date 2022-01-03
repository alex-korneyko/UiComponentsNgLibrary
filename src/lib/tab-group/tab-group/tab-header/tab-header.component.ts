import {Component, Input, OnInit} from '@angular/core';
import {TabGroup} from '../tab-group';

@Component({
  selector: 'bs-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: [
    './tab-header.component.css',
    '../../../../styles/bs-variables.css'
  ]
})
export class TabHeaderComponent implements OnInit {

  @Input() tabGroup: TabGroup<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
