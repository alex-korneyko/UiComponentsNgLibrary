import {Component, Input, OnInit} from '@angular/core';
import {Size} from '../../../size.enum';
import {TitlePosition} from '../../../title-position.enum';
import {ColorStyle} from '../../../color-style.enum';

@Component({
  selector: 'bs-input-title',
  templateUrl: './input-title.component.html',
  styleUrls: [
    './input-title.component.css',
    '../../../../styles/bs-variables.css'
  ]
})
export class InputTitleComponent implements OnInit {

  @Input()
  size: Size;

  @Input()
  color: ColorStyle = ColorStyle.None;

  @Input()
  titlePosition: TitlePosition;

  @Input()
  disabled = false;

  sizeValues = Size;
  titlePositionValues = TitlePosition;

  constructor() { }

  ngOnInit(): void {
  }

}
