import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Size} from '../../../size.enum';
import {TitlePosition} from '../../../title-position.enum';
import {ColorStyle} from '../../../color-style.enum';
import {SelectValue} from '../../select-value';

@Component({
  selector: 'bs-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: [
    './multi-select.component.css',
    '../../../../styles/bs-variables.css'
  ]
})
export class MultiSelectComponent implements OnInit {

  @Input()
  title = ""

  @Input()
  color: ColorStyle = ColorStyle.SlateGrey

  @Input()
  size: Size;

  @Input()
  rowsCount = 4;

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
  bsModel: string[];

  @Output()
  bsModelChange = new EventEmitter<string[]>();

  @Output()
  onChange = new EventEmitter();

  sizeValues = Size;
  titlePositionValues = TitlePosition;

  constructor() { }

  ngOnInit(): void { }

  modelChanged(event: string[]) {
    // console.log(event);
    this.bsModelChange.emit(event);
    this.onChange.emit();
  }

}
