import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';
import {DropdownComponent} from './dropdown/dropdown.component';
import {DropdownEventType} from './dropdown-event-type.enum';
import {DropdownService} from './dropdown/dropdown.service';

@Directive({
  selector: '[bsDropdown]'
})
export class DropdownDirective<T> implements AfterViewInit{

  @Input() bsDropdown: {dropdownComponent: DropdownComponent<T>, data?: T}
  @Input() bsDropdownEventType: DropdownEventType;

  constructor(private elementRef: ElementRef, private dropdownService: DropdownService) {}

  ngAfterViewInit() {
    this.bsDropdown.dropdownComponent.dropdownSensitiveArea = this.elementRef;
  }

  @HostListener('click', ['$event'])
  OnClick(event: MouseEvent) {
    if (this.bsDropdownEventType === DropdownEventType.MouseClick) {
      this.ShowDropdown(event)
    }
  }

  @HostListener('dblclick', ['$event'])
  OnDblClick(event: MouseEvent) {
    if (this.bsDropdownEventType === DropdownEventType.MouseDoubleClick) {
      this.ShowDropdown(event)
    }
  }

  @HostListener('mouseenter', ['$event'])
  OnMouseEnter(event: MouseEvent) {
    if (this.bsDropdownEventType === DropdownEventType.MouseEnter) {
      this.ShowDropdown(event)
    }
  }

  @HostListener('contextmenu', ['$event'])
  OnMouseContext(event: MouseEvent) {
    event.preventDefault();
    if (this.bsDropdownEventType === DropdownEventType.MouseContext) {
      this.ShowDropdown(event)
    }
  }

  @HostListener('auxclick', ['$event'])
  OnMouseAuxClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    if (this.bsDropdownEventType === DropdownEventType.MouseAuxClick) {
      this.ShowDropdown(event)
    }
  }

  private ShowDropdown(event: MouseEvent) {
    this.bsDropdown.dropdownComponent.dropdownContentInstance.data = this.bsDropdown.data;
    this.dropdownService.Show(this.bsDropdown.dropdownComponent, event);
  }
}
