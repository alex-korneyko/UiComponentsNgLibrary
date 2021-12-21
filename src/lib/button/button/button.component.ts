import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Size} from '../../size.enum';
import {ColorStyle} from '../../color-style.enum';

@Component({
  selector: 'bs-button',
  templateUrl: './button.component.html',
  styleUrls: [
    './button.component.css',
    '../../../styles/bs-variables.css'
  ]
})
export class ButtonComponent implements OnInit {

  @Input()
  size: Size;

  @Input()
  color: ColorStyle = ColorStyle.Grey;

  @Input()
  width = "auto"

  @Input()
  disabled = false;

  @Output()
  clickEvent = new EventEmitter<MouseEvent>();

  componentSizes = Size;
  colorStyle = ColorStyle

  constructor() { }

  ngOnInit(): void {
  }

  BtnClick($event: MouseEvent) {
    this.clickEvent.emit($event);
  }
}
