import {Component, Input, OnInit} from '@angular/core';
import {ColorStyle} from '../../color-style.enum';
import {TitlePosition} from '../../title-position.enum';
import {Size} from '../../size.enum';

@Component({
  selector: 'bs-group-panel',
  templateUrl: './group-panel.component.html',
  styleUrls: [
    './group-panel.component.css',
    '../../../styles/bs-variables.css'
  ]
})
export class GroupPanelComponent implements OnInit {

  @Input()
  title: string

  @Input()
  color: ColorStyle

  @Input()
  size: Size;

  titlePosition = TitlePosition
  Size = Size;

  constructor() { }

  ngOnInit(): void {
  }

}
