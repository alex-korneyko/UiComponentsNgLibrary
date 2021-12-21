import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorStyle} from '../../../color-style.enum';
import {Size} from '../../../size.enum';
import {TitlePosition} from '../../../title-position.enum';
import {SelectValue} from '../../select-value';

@Component({
  selector: 'bs-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: [
    './dropdown-select.component.css',
    "../../../../styles/bs-variables.css"
  ]
})
export class DropdownSelectComponent implements OnInit {

  @Input()
  title = ""

  @Input()
  color: ColorStyle = ColorStyle.SlateGrey

  @Input()
  size: Size;

  @Input()
  titlePosition: TitlePosition;

  @Input()
  titleWidth = "auto";

  @Input()
  disabled = false;

  @Input()
  prompt = "";

  @Input()
  values = new Array<SelectValue>()

  @Input()
  bsModel: string;

  @Output()
  bsModelChange = new EventEmitter<string>();

  @Output()
  onChange = new EventEmitter();

  sizeValues = Size;
  titlePositionValues = TitlePosition;

  constructor() { }

  ngOnInit(): void {
  }

  modelChanged(event: string) {
    // console.log(event);
    this.bsModelChange.emit(event);
    this.onChange.emit();
  }
}
