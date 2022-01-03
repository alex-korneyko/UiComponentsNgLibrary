import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Size} from '../../size.enum';
import {ColorStyle} from '../../color-style.enum';
import {Button} from '../../button/button/button';

@Component({
  selector: 'lib-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  constructor() { }

  @Input()
  show = false;

  @Output()
  showChange = new EventEmitter<boolean>();

  @Input()
  header: string | undefined

  @Input()
  text: string | undefined

  @Input()
  modalData: any;

  @Input()
  showFooter: boolean;

  @Input()
  size: Size

  @Input()
  scrollable = false;

  @Input()
  buttons = new Array<Button>();

  sizeEnum = Size;
  colorStyle = ColorStyle

  @Input()
  okFunction: (data?: any) => void;
  @Input()
  cancelFunc: () => void;

  ngOnInit(): void {
  }

  stopPropagation($event: MouseEvent) {
    $event.stopPropagation();
  }

  closeClick() {
    if (this.cancelFunc != null) {
      this.cancelFunc()
    } else {
      this.show = false;
      this.showChange.emit(this.show)
    }
  }
}
