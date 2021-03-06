import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ColorStyle} from '../../color-style.enum';
import {Size} from '../../size.enum';
import {TitlePosition} from '../../title-position.enum';
import {TextInputType} from '../../text-input-type.enum';
import {Button} from '../../button/button/button';


@Component({
  selector: 'bs-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: [
    './text-input.component.css',
    "../../../styles/bs-variables.css"
  ]
})
export class TextInputComponent implements OnInit {

  @Input()
  title = ""

  @Input()
  color: ColorStyle = ColorStyle.SlateGrey

  @Input()
  size: Size;

  @Input()
  titlePosition = TitlePosition.Left;

  @Input()
  type: TextInputType = TextInputType.text;

  @Input()
  titleWidth = "auto";

  @Input()
  disabled = false;

  @Input()
  prompt = "";

  @Input()
  placeholder = "";

  @Input()
  bsModel: any;

  @Input()
  buttons = new Array<Button>()

  @Output()
  bsModelChange = new EventEmitter<any>();

  @Output()
  onChange = new EventEmitter();

  sizeValues = Size;
  titlePositionValues = TitlePosition;

  constructor() { }

  ngOnInit(): void {
    this.buttons.forEach(button => button.setSize(this.size))
  }

  modelChanged(event: any) {
    this.bsModelChange.emit(event);
    this.onChange.emit();
  }
}
