import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Size} from '../../size.enum';
import {ColorStyle} from '../../color-style.enum';
import {Button} from '../../button/button/button';

@Component({
  selector: 'lib-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: [
    './modal-window.component.css',
    '../../../styles/bs-variables.css'
  ]
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
  color: ColorStyle = ColorStyle.None

  @Input()
  scrollable = false;

  @Input()
  buttons = new Array<Button>();

  @Input()
  requireAction = false;

  sizeEnum = Size;
  colorStyle = ColorStyle
  isFullscreen = false;

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

  shadowClick() {
    if (!this.requireAction) {
      this.show = false;
      this.showChange.emit(this.show)
    }
  }

  fullscreenClick() {
    this.isFullscreen = !this.isFullscreen;
  }

  currentSize(): Size {
    return this.isFullscreen ? Size.max : this.size
  }
}
