import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorStyle} from '../../color-style.enum';
import {Size} from '../../size.enum';
import {TitlePosition} from '../../title-position.enum';

@Component({
  selector: 'bs-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: [
    './text-area.component.css',
    '../../../styles/bs-variables.css'
  ]
})
export class TextAreaComponent implements OnInit {

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
  placeholder = "";

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
    this.bsModelChange.emit(event);
    this.onChange.emit();
  }
}
